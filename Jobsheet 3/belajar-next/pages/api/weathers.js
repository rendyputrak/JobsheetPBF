export default async function handler(req, res) {
    const LAT = "-6.2088";
    const LON = "106.8456";
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`;
  
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Gagal mengambil data cuaca");
  
      const data = await response.json();
      res.status(200).json(data.current_weather);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  