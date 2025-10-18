document.addEventListener('DOMContentLoaded', () => {
    const objects = document.querySelectorAll('.interactive-object');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // --- Data Konten (Edit di sini) ---
    const contents = {
        photo: `
            <h3 style="color:#ff69b4;">The Cake of Happiness</h3>
            <img src="foto_tante.jpg" alt="Foto Tante" style="max-height: 300px;">
            <p>Melihat senyum Tante itu seperti mencicipi kue terlezat di dunia. Selalu bersinar ya, Tante!</p>
        `,
        message: `
            <h3 style="color:#5d2b4a;">Awan Harapan</h3>
            <p style="font-style: italic;">
                "Setiap tahun berlalu, Tante semakin menawan.<br>
                Semoga balon-balon harapan ini membawa Tante terbang tinggi<br>
                menuju semua impian yang belum terwujud. Love you!"
            </p>
            <p style="font-size: 0.9em; margin-top: 20px;">- [Nama Anda]</p>
        `,
        game: `
            <h3 style="color:#ff69b4;">Buka Kunci Kejutan! 🎁</h3>
            <p>Untuk membuka hadiah utama, Tante harus menebak **Kode Rahasia**!</p>
            <p>Clue: Tanggal Ulang Tahun [Nama Anda]!</p>
            <input type="text" id="game-input" placeholder="Masukkan 4 Angka">
            <button id="game-check-btn" style="background-color: #5d2b4a; color: white; padding: 10px 15px; border-radius: 5px; margin-top: 10px;">Cek Kode</button>
            <p id="game-result" style="margin-top: 10px; font-weight: bold;"></p>
        `
    };
    
    // --- Logika Buka Modal ---
    objects.forEach(obj => {
        obj.addEventListener('click', () => {
            const contentType = obj.dataset.content;
            
            // Masukkan konten yang sesuai
            modalBody.innerHTML = contents[contentType];
            modalBody.className = `${contentType}-content`; // Tambahkan kelas untuk styling
            modal.classList.remove('hidden');

            // Jika itu game, tambahkan listener untuk tombol Cek Kode
            if (contentType === 'game') {
                setupGameLogic();
            }
        });
    });
    
    // --- Logika Tutup Modal ---
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Tutup saat klik di luar modal
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            modal.classList.add('hidden');
        }
    });

    // --- Logika Mini-Game ---
    function setupGameLogic() {
        const input = document.getElementById('game-input');
        const checkBtn = document.getElementById('game-check-btn');
        const result = document.getElementById('game-result');
        const correctCode = '0905'; // GANTI DENGAN KODE RAHASIA ASLI (misalnya 0905 untuk 9 Mei)
        
        checkBtn.addEventListener('click', () => {
            if (input.value === correctCode) {
                result.style.color = 'green';
                result.innerHTML = 'BERHASIL! Hadiah Utama Tante adalah **Voucher Liburan Akhir Pekan** bersamaku! Cek WhatsApp-ku!';
                checkBtn.disabled = true;
            } else {
                result.style.color = 'red';
                result.textContent = 'Kode Salah. Coba ingat-ingat lagi clue-nya...';
            }
        });
    }
});