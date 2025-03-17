import { useEffect, useState } from "react";
import Link from "next/link";

const HomePage = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("/api/weathers");
        if (!res.ok) throw new Error("Gagal mengambil data cuaca");

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError((err as unknown as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Selamat Datang di Website Saya!</h1>
      <p>Ini adalah halaman utama.</p>
      <Link href="/about">Tentang Kami</Link>

      <h2>Cuaca Saat Ini:</h2>
      {weather && (
        <div>
          <p>Suhu: {weather.temperature}°C</p>
          <p>Kecepatan Angin: {weather.windspeed} km/h</p>
          <p>Waktu Update: {weather.time}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
