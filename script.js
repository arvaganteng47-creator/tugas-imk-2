const form = document.getElementById('formData');
const warning = document.getElementById('warning');
const result = document.getElementById('result');

const nama = document.getElementById('nama');
const nim = document.getElementById('nim');
const kelas = document.getElementById('kelas');
const jurusan = document.getElementById('jurusan');
const alamat = document.getElementById('alamat');

const regexNama = /^[A-Za-z\s]+$/;

function showWarning(message, element){

    warning.style.display = 'block';
    warning.innerHTML = message;

    warning.scrollIntoView({
        behavior:'smooth',
        block:'center'
    });

    document.querySelectorAll('input, textarea').forEach(el=>{
        el.classList.remove('error-input');
    });

    element.classList.add('error-input');

    element.focus();
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    warning.style.display = 'none';

    if(!regexNama.test(nama.value.trim())){

        showWarning(
            '⚠ Nama tidak boleh mengandung angka atau simbol!',
            nama
        );

        return;
    }

    if(nim.value.trim().length < 5){

        showWarning(
            '⚠ NIM terlalu pendek!',
            nim
        );

        return;
    }

    if(kelas.value.trim() === ''){

        showWarning(
            '⚠ Kelas wajib diisi!',
            kelas
        );

        return;
    }

    if(jurusan.value.trim() === ''){

        showWarning(
            '⚠ Jurusan wajib diisi!',
            jurusan
        );

        return;
    }

    if(alamat.value.trim().length < 10){

        showWarning(
            '⚠ Alamat terlalu pendek!',
            alamat
        );

        return;
    }

    result.innerHTML = `
        <div class="success">
            <h2>✅ DATA BERHASIL DISIMPAN</h2>

            <p><b>Nama:</b> ${nama.value}</p>
            <p><b>NIM:</b> ${nim.value}</p>
            <p><b>Kelas:</b> ${kelas.value}</p>
            <p><b>Jurusan:</b> ${jurusan.value}</p>
            <p><b>Alamat:</b> ${alamat.value}</p>
        </div>
    `;

    result.scrollIntoView({
        behavior:'smooth'
    });

    form.reset();

});