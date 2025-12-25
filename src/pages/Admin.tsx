import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
  const [auth, setAuth] = useState({ login: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [requests, setRequests] = useState<any[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Проверка логина и пароля администратора через Supabase
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('login', auth.login)
      .eq('password', auth.password)
      .single();
    if (data) {
      setIsLoggedIn(true);
      fetchRequests();
    } else {
      setError('Неверный логин или пароль');
    }
  };

  const fetchRequests = async () => {
    const { data } = await supabase
      .from('call_requests')
      .select('*')
      .order('created_at', { ascending: false });
    setRequests(data || []);
  };

  const handleProcess = async (id: number) => {
    await supabase
      .from('call_requests')
      .update({ processed: true })
      .eq('id', id);
    fetchRequests();
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <form onSubmit={handleLogin} className="bg-card p-8 rounded shadow w-96 space-y-4">
          <h2 className="text-xl font-bold mb-4">Вход администратора</h2>
          <input
            type="text"
            placeholder="Логин"
            value={auth.login}
            onChange={e => setAuth(a => ({ ...a, login: e.target.value }))}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={auth.password}
            onChange={e => setAuth(a => ({ ...a, password: e.target.value }))}
            className="w-full p-2 border rounded"
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full bg-primary text-white py-2 rounded">Войти</button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Заявки на звонок</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-muted">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Телефон</th>
            <th className="p-2 border">Дата</th>
            <th className="p-2 border">Статус</th>
            <th className="p-2 border">Действие</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(r => (
            <tr key={r.id} className={r.processed ? 'bg-green-50' : ''}>
              <td className="p-2 border">{r.id}</td>
              <td className="p-2 border">{r.phone}</td>
              <td className="p-2 border">{new Date(r.created_at).toLocaleString()}</td>
              <td className="p-2 border">{r.processed ? 'Обработано' : 'Новая'}</td>
              <td className="p-2 border">
                {!r.processed && (
                  <button onClick={() => handleProcess(r.id)} className="bg-success text-white px-3 py-1 rounded">Отметить как обработано</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
