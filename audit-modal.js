/* Audit Modal Controls */
  var lastFocusedElement = null;

  function openAuditModal() {
    var modal = document.getElementById('auditModal');
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    
    // Close mobile menu if open
    var mob = document.getElementById('mob');
    if (mob && !mob.classList.contains('hidden')) {
      mob.classList.add('hidden');
    }

    modal.classList.remove('opacity-0', 'pointer-events-none');
    var card = modal.querySelector('div');
    if (card) {
      card.classList.remove('scale-95');
      card.classList.add('scale-100');
    }
    document.body.style.overflow = 'hidden';

    var firstInput = document.getElementById('auditModalName');
    if (firstInput) {
      setTimeout(function() { firstInput.focus(); }, 100);
    }
  }

  function closeAuditModal() {
    var modal = document.getElementById('auditModal');
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    var card = modal.querySelector('div');
    if (card) {
      card.classList.remove('scale-100');
      card.classList.add('scale-95');
    }
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Close modal when clicking on overlay background
  document.addEventListener('click', function(e) {
    var modal = document.getElementById('auditModal');
    if (modal && e.target === modal) {
      closeAuditModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var modal = document.getElementById('auditModal');
      if (modal && !modal.classList.contains('pointer-events-none')) {
        closeAuditModal();
      }
    }
  });

  /* Modal Form Submit Handler */
  async function handleAuditModalSubmit(e) {
    e.preventDefault();
    var form = document.getElementById('auditModalForm');
    var errorBox = document.getElementById('auditModalError');
    var successBox = document.getElementById('auditModalSuccess');
    var name = (document.getElementById('auditModalName')?.value || '').trim();
    var email = (document.getElementById('auditModalEmail')?.value || '').trim();
    var brand = (document.getElementById('auditModalBrand')?.value || '').trim();
    var asin = (document.getElementById('auditModalAsin')?.value || '').trim();
    var marketplace = (document.getElementById('auditModalMarketplace')?.value || '').trim();
    var revenue = document.getElementById('auditModalRevenue')?.value || '';

    var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !email || !emailValid || !brand || !asin || !marketplace || !revenue) {
      if (errorBox) errorBox.classList.remove('hidden');
      return;
    }
    if (errorBox) errorBox.classList.add('hidden');

    var submitBtn = document.getElementById('auditModalSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Submitting Audit Request...';
    }

    var accessKey = form.querySelector('input[name="access_key"]')?.value || '';
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      setTimeout(function() {
        form.classList.add('hidden');
        if (successBox) successBox.classList.remove('hidden');
      }, 500);
      return;
    }

    try {
      var res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form)
      });
      var data = await res.json();
      if (data.success) {
        form.classList.add('hidden');
        if (successBox) successBox.classList.remove('hidden');
      } else {
        if (errorBox) {
          var p = errorBox.querySelector('p:last-child');
          if (p) p.innerText = data.message || 'Submission error. Please try again.';
          errorBox.classList.remove('hidden');
        }
      }
    } catch (err) {
      if (errorBox) {
        var p = errorBox.querySelector('p:last-child');
        if (p) p.innerText = 'Network error. Please try again.';
        errorBox.classList.remove('hidden');
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Get My Free Store Audit →';
      }
    }
  }

  // Hook all audit buttons
  document.addEventListener('DOMContentLoaded', function() {
    var triggers = document.querySelectorAll('[data-open-audit], a[href*="#audit"], a[href="index.html#audit"], button[onclick*="audit"]');
    triggers.forEach(function(btn) {
      if (btn.id !== 'auditModalSubmitBtn' && btn.id !== 'auditSubmitBtn') {
        btn.addEventListener('click', function(evt) {
          evt.preventDefault();
          openAuditModal();
        });
      }
    });
  });