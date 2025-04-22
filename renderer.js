
// Ambil elemen
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById("display");
    const startBtn = document.getElementById("start");
    const pauseBtn = document.getElementById("pause");
    const resetBtn = document.getElementById("reset");
    
    
    let timeLeft = 0; // sisa waktu berjalan
    let timer = null; // ID interval untuk kontrol setInterval
    let isPaused = false; //status pause/resume
    
    pauseBtn.disabled = true;
    
    
    // Fungsi untuk menampilkan waktu di layar
    function updateDisplay() {
      const minutes = Math.floor(timeLeft / 60); // Ubah timeLeft (dalam detik) jadi format MM:SS
      const seconds = timeLeft % 60; //ambil sisa detik
      display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }; //padStart memastikan string-nya selalu 2 digit, dan kalau kurang digit, ditambahin angka 0 di depan. Contoh: 5 jadi 05.
    
                              
    // Event untuk tombol durasi
    document.querySelectorAll('.pomodoro button').forEach(button => {
      button.addEventListener('click', () => {
        // Jika timer sedang berjalan, tanyakan konfirmasi
          if (timer) {
            const userConfirmed = confirm("Timer sedang berjalan. Apakah Anda ingin mengganti durasi?");
            if (!userConfirmed) return; // Jika user tidak setuju, batalkan pemilihan
          }
        
        // Set waktu baru jika konfirmasi diterima atau timer tidak berjalan
        timeLeft = parseInt(button.value) * 60; // Saat diklik, ambil value dari tombol → dikalikan 60 jadi detik
        updateDisplay();
      });
    });
    
    // Start Timer
    startBtn.addEventListener('click', () => {
      if (timeLeft === 0) {
        alert("Silakan pilih durasi waktu terlebih dahulu!");
        return; }
    
      isPaused = false;
      timer = setInterval(() => {
        if (!isPaused && timeLeft > 0) {
          timeLeft--;
          updateDisplay();
        }
    
        if (timeLeft === 0) {
        clearInterval(timer);
        timer = null;
        pauseBtn.disabled = true; // Nonaktifkan tombol pause
        alert("Waktu habis!");
        }
      }, 1000);
      pauseBtn.disabled = false;
    });
                              
    
    // Toggle Pause Timer
    pauseBtn.addEventListener('click', () => {
       // Cek dulu apakah timer sedang berjalan
      if (!timer) return; // timer belum jalan, keluar langsung
    
      isPaused = !isPaused;
      pauseBtn.textContent = isPaused ? "Resume" : "Pause";
    });
    
    // Reset Timer
    resetBtn.addEventListener('click', () => {
      clearInterval(timer);
      timer = null;
      timeLeft = 0;
      isPaused = false;
      pauseBtn.textContent = "Pause";
      pauseBtn.disabled = true;
      updateDisplay();
    });
    });
    
    document.addEventListener('DOMContentLoaded', () => {
      const gifText = document.getElementById("gif-text");
    
      // Array teks yang akan bergantian setiap 2 menit
      const texts = [
        "Drink 2L of water can help you study",
        "Don't forget to take a rest!",
        "Cool! you beyound your limit",
        "Blue is a symbol of peace and calm",
        "I love being smart and intellegent"
      ];
    
      let currentTextIndex = 0; // Menyimpan indeks teks yang sedang ditampilkan
    
      // Fungsi untuk mengganti teks setiap 2 menit
      setInterval(() => {
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Cek apakah kita sudah mencapai akhir array
        gifText.textContent = texts[currentTextIndex]; // Update teks
      }, 30000); // Set interval 2 menit (120.000 ms)
    });
    