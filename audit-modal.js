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
  setTimeout(function() {
    var form = document.getElementById('auditModalForm');
    var successBox = document.getElementById('auditModalSuccess');
    var errorBox = document.getElementById('auditModalError');
    if (form && successBox && !successBox.classList.contains('hidden')) {
      form.classList.remove('hidden');
      successBox.classList.add('hidden');
      if (errorBox) errorBox.classList.add('hidden');
    }
  }, 400);
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
  if (!form) return;
  var errorBox = document.getElementById('auditModalError');
  var successBox = document.getElementById('auditModalSuccess');
  var submitBtn = document.getElementById('auditModalSubmitBtn');

  var name = (document.getElementById('auditModalName')?.value || '').trim();
  var email = (document.getElementById('auditModalEmail')?.value || '').trim();
  var brand = (document.getElementById('auditModalBrand')?.value || '').trim();
  var asin = (document.getElementById('auditModalAsin')?.value || '').trim();
  var marketplace = (document.getElementById('auditModalMarketplace')?.value || '').trim();
  var revenue = document.getElementById('auditModalRevenue')?.value || '';
  var adSpend = (document.getElementById('auditModalAdSpend')?.value || '').trim();
  var challenge = document.getElementById('auditModalChallenge')?.value || '';

  // Honeypot spam check
  var botcheck = form.querySelector('input[name="botcheck"]');
  if (botcheck && botcheck.checked) {
    return;
  }

  var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !email || !emailValid || !brand || !asin || !marketplace || !revenue) {
    if (errorBox) {
      var p = errorBox.querySelector('p:last-child');
      if (p) p.innerText = 'Please check the required fields and provide a valid email.';
      errorBox.classList.remove('hidden');
    }
    return;
  }
  if (errorBox) errorBox.classList.add('hidden');

  var originalBtnText = submitBtn ? submitBtn.innerText : 'Get My Free Store Audit →';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';
  }

  var payload = {
    access_key: "551d55dd-cc97-403d-9929-4713ba42ef1b",
    subject: "New Free Store Audit Request - Aabzone",
    from_name: "Aabzone Website",
    name: name,
    email: email,
    brand: brand,
    asin_store: asin,
    marketplace: marketplace,
    monthly_revenue: revenue,
    ad_spend: adSpend,
    challenge: challenge,
    form_type: "Free Store Audit Request Popup"
  };

  try {
    var res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    var data = await res.json();
    if (data.success === true) {
      form.reset();
      form.classList.add('hidden');
      if (successBox) successBox.classList.remove('hidden');
    } else {
      if (errorBox) {
        var p = errorBox.querySelector('p:last-child');
        if (p) p.innerText = 'Something went wrong, please try again';
        errorBox.classList.remove('hidden');
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
      }
    }
  } catch (err) {
    if (errorBox) {
      var p = errorBox.querySelector('p:last-child');
      if (p) p.innerText = 'Something went wrong, please try again';
      errorBox.classList.remove('hidden');
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = originalBtnText;
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
