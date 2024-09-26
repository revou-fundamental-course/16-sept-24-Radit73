let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Ubah gambar setiap 4 detik
}

function calculateAge(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    
    // Jika bulan atau tanggal belum dilewati dalam tahun ini, kurangi 1 tahun
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Event listener untuk menangani submit form
    document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input dari form
    var name = document.getElementById('name').value;
    var birthdate = document.getElementById('birthdate').value;
    var message = document.getElementById('message').value;

    // Ambil nilai jenis kelamin yang dipilih
    var gender = document.querySelector('input[name="gender"]:checked').value;

    // Hitung umur berdasarkan tanggal lahir
    var age = calculateAge(birthdate);

    // Menampilkan hasil di dalam elemen <span>
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultAge').textContent = age;
    document.getElementById('resultGender').textContent = gender;
    document.getElementById('resultMessage').textContent = message;
});

    // Fungsi untuk meminta nama dan menampilkan sapaan
    function greetUser() {
    // Mengambil nama dari prompt
    var name = prompt("Masukkan nama Anda:");

    // Mengecek jika pengguna memasukkan nama
    if (name) {
    // Membuat kalimat sapaan
    var greeting = "Selamat datang, " + name + "!";
                
    // Menampilkan sapaan di dalam elemen <span>
    document.getElementById('greetingMessage').textContent = greeting;
    } else {
    // Menampilkan pesan jika tidak ada input
    document.getElementById('greetingMessage').textContent = "Tidak ada nama yang dimasukkan.";
    }
}

    // Event listener untuk memanggil fungsi greetUser saat halaman dimuat
    document.addEventListener('DOMContentLoaded', greetUser);
