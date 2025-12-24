'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (type === 'signup') {
      // For signup
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.find((user: any) => user.email === email);
      
      if (userExists) {
        setError('User already exists');
        return;
      }

      const newUser = { email, password, name };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify(newUser));
      alert('Account created successfully!');
      router.push('/dashboard');
    } else {
      // For login
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>
        {type === 'login' ? 'Login' : 'Create Account'}
      </h2>
      
      {type === 'signup' && (
        <div style={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
      )}

      <div style={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
      </div>

      {error && <div style={styles.error}>{error}</div>}

      <button type="submit" style={styles.button}>
        {type === 'login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '30px',
    textAlign: 'center' as const,
    color: '#333',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
  },
  error: {
    color: '#ef4444',
    marginBottom: '15px',
    textAlign: 'center' as const,
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};