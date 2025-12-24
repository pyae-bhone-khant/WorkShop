'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ChefHat, Check } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('cookcraft_users') || '[]');
      
      // Check if user already exists
      const userExists = existingUsers.find(
        (user: any) => user.email === formData.email || user.username === formData.username
      );
      
      if (userExists) {
        setError('User with this email or username already exists');
        setLoading(false);
        return;
      }

      // Create new user
      const newUser = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.username}`,
      };

      // Save to localStorage
      existingUsers.push(newUser);
      localStorage.setItem('cookcraft_users', JSON.stringify(existingUsers));
      
      // Set current user
      localStorage.setItem('cookcraft_current_user', JSON.stringify(newUser));

      // Show success and redirect
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);

    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError('');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 p-4 overflow-hidden">
      {/* Main Container - Fixed size, no scroll */}
      <div className="w-full max-w-6xl h-[90vh] max-h-[800px] flex bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Side - Brand/Image */}
        <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-orange-500 to-amber-500 p-12">
          <div className="absolute inset-0 bg-black/5"></div>
          
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">CookCraft</span>
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Start Your<br />Culinary<br />Journey
              </h1>
              <p className="text-white/90 text-lg max-w-md">
                Join thousands of food enthusiasts sharing and discovering amazing recipes
              </p>
              
              {/* Features List */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">Share your secret recipes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">Connect with food lovers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">Build your cooking profile</span>
                </div>
              </div>
            </div>

            {/* Bottom text */}
            <div className="text-white/80 text-sm">
              <p>Already part of our community? <Link href="/login" className="text-white font-semibold hover:underline">Sign in here</Link></p>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 overflow-y-auto">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              CookCraft
            </span>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Join CookCraft Today!
            </h1>
            <p className="text-gray-600 mt-2">
              Create your account to start sharing
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200 pr-12"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-orange-600 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'SIGN UP'
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="font-medium text-gray-700">Google</span>
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-medium text-gray-700">Facebook</span>
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-semibold text-orange-600 hover:text-orange-700 hover:underline"
                >
                  SIGN IN
                </Link>
              </p>
            </div>
          </form>

          {/* Mobile Bottom Text */}
          <div className="lg:hidden text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              By joining, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}