function submitForm() {
    var studentName = document.getElementById('studentName').value;
    var courseName = document.getElementById('courseName').value;
    var rating = document.getElementById('rating').value;
    var comments = document.getElementById('comments').value;
  
    // الحصول على اتجاه النص الحالي
    var dir = getComputedStyle(document.documentElement).direction;
  
    // قلب النص إذا كان الاتجاه من اليمين إلى اليسار
    if (dir === 'rtl') {
      studentName = studentName.split('').reverse().join('');
      courseName = courseName.split('').reverse().join('');
      comments = comments.split('').reverse().join('');
    }
  
    // يمكنك إرسال هذه البيانات إلى الخادم هنا أو إجراء أي إجراء إضافي بناءً على احتياجاتك
  
    alert("تم تقديم التقييم!\n\n" +
      "الطالب: " + studentName + "\n" +
      "الدورة: " + courseName + "\n" +
      "التقييم: " + rating + "\n" +
      "التعليقات: " + comments);
  
    // إضافة تأثير بسيط - تغيير لون خلفية الصفحة بعد تقديم التقييم
    document.body.style.backgroundColor = "#e6ffe6";
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Avoid submitting forms

      // Get the currently focused element
      const focusedElement = document.activeElement;

      // Find the next tabindex
      let nextTabIndex = parseInt(focusedElement.getAttribute('tabindex'), 10) + 1;

      // If it's the last element, go back to the first one
      if (nextTabIndex > 4) {
        nextTabIndex = 1;
      }

      // Find the next element with the updated tabindex
      const nextElement = document.querySelector(`[tabindex="${nextTabIndex}"]`);

      // Set focus on the next element
      if (nextElement) {
        nextElement.focus();
      }
    }
  });