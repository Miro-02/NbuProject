import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../auth/AuthContext";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required")
});

type LoginFormData = z.infer<typeof loginSchema>;

function Login() {
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            setIsSubmitting(true);
            setApiError(null);

            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/login`, data);
            
            if (response.status === 200) {
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                await login(response.data.token);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setApiError(error.response?.data.message || 'Login failed');
            } else {
                setApiError('An unexpected error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg max-w-2xl w-full">
            <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-[#093f87] text-center">
                Welcome Back
            </h1>

            {apiError && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {apiError}
                </div>
            )}

            <div className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                </label>
                <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#093f87] focus:ring-2 focus:ring-[#093f87]/20"
                    autoComplete="username"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <div className="relative">
                    <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#093f87] focus:ring-2 focus:ring-[#093f87]/20"
                    autoComplete="current-password"
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#093f87]"
                    >
                    {showPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                        <EyeIcon className="w-5 h-5" />
                    )}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-white rounded-lg transition-colors ${
                    isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#093f87] hover:bg-[#082f6a]'
                }`}
                >
                {isSubmitting ? 'Logging In...' : 'Sign In'}
                </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2">
                <p className="text-sm text-gray-500 text-center">
                Don't have an account?{' '}
                <Link to="/sign-up" className="text-[#093f87] hover:underline">
                    Sign Up
                </Link>
                </p>
            </div>
            </div>
        </form>
        </div>
    );
}

export default Login;