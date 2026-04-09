/**
 * وظيفة التنقل بين الصفحات
 * @param {string} pageId - معرف الصفحة المراد إظهارها
 */
function switchPage(pageId) {
    // إخفاء جميع الصفحات
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // إظهار الصفحة المطلوبة
    document.getElementById(pageId).classList.add('active');
    
    // تحديث حالة الأزرار في القائمة العلوية
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    document.getElementById('nav-' + pageId).classList.add('active');
    
    // تشغيل أنيميشن أشرطة المهارات عند الدخول لصفحة الخبرات
    if(pageId === 'skills') {
        setTimeout(() => { 
            document.querySelectorAll('.bar-inner').forEach(b => b.style.width = b.getAttribute('data-w')); 
        }, 300);
    } else {
        // إعادة الأشرطة للصفر عند الخروج من الصفحة
        document.querySelectorAll('.bar-inner').forEach(b => b.style.width = '0');
    }
}

/**
 * وظيفة فتح تطبيق واتساب مباشرة
 */
function openWA() {
    const name = document.getElementById('senderName').value.trim();
    const msg = document.getElementById('senderMsg').value.trim();
    
    if(!name || !msg) { 
        alert("يرجى تعبئة الاسم والرسالة أولاً"); 
        return; 
    }
    
    const phone = "967779749412";
    const text = encodeURIComponent(`الاسم: ${name}\nالرسالة: ${msg}`);
    
    // محاولة فتح التطبيق مباشرة باستخدام البروتوكول الخاص
    window.location.href = `whatsapp://send?phone=${phone}&text=${text}`;
    
    // خطة بديلة (Fallback) في حال لم يتم التعرف على البروتوكول
    setTimeout(() => {
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    }, 1000);
}

/**
 * وظيفة إرسال إيميل عبر تطبيق الجيميل
 */
function openGM() {
    const name = document.getElementById('senderName').value.trim();
    const msg = document.getElementById('senderMsg').value.trim();
    if(!name || !msg) { alert("يرجى تعبئة الحقول"); return; }
    
    const email = "motsam625@gmail.com";
    const subject = encodeURIComponent("تواصل مهني من معرض الأعمال");
    const body = encodeURIComponent(`الاسم: ${name}\nالرسالة: ${msg}`);
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
