/**
 * Aabzone — Free Store Audit Modal & Form Controller
 * Backend: Web3Forms API (https://api.web3forms.com/submit)
 * Handles open/close modal, keyboard traps, client-side validation,
 * honeypot spam filtering, and asynchronous AJAX submission with confirmation.
 */

var lastFocusedElement = null;

function openAuditModal() {
  var modal = document.getElementById('auditModal');
  if (!modal) return;
  lastFocusedElement = document.activeElement;

  // Close mobile navigation drawer if open
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
    setTimeout(function () {
      firstInput.focus();
    }, 100);
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

  // Reset form views after transition completes
  setTimeout(function () {
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

// Close modal when clicking on dark backdrop overlay
document.addEventListener('click', function (e) {
  var modal = document.getElementById('auditModal');
  if (modal && e.target === modal) {
    closeAuditModal();
  }
});

// Close modal on Escape key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    var modal = document.getElementById('auditModal');
    if (modal && !modal.classList.contains('pointer-events-none')) {
      closeAuditModal();
    }
  }
});

/**
 * Handle Free Store Audit submission (Shortened fields: Name, Work Email, Store URL / ASIN, Biggest Challenge)
 */
async function handleAuditModalSubmit(e) {
  e.preventDefault();
  var form = document.getElementById('auditModalForm');
  if (!form) return;

  var errorBox = document.getElementById('auditModalError');
  var successBox = document.getElementById('auditModalSuccess');
  var submitBtn = document.getElementById('auditModalSubmitBtn');

  // Input elements
  var nameEl = document.getElementById('auditModalName');
  var emailEl = document.getElementById('auditModalEmail');
  var asinEl = document.getElementById('auditModalAsin');
  var challengeEl = document.getElementById('auditModalChallenge');

  var name = (nameEl ? nameEl.value : '').trim();
  var email = (emailEl ? emailEl.value : '').trim();
  var asin = (asinEl ? asinEl.value : '').trim();
  var challenge = challengeEl ? challengeEl.value : '';

  // 1. Honeypot anti-spam check
  var botcheck = form.querySelector('input[name="botcheck"]');
  if (botcheck && botcheck.checked) {
    console.warn('Bot submission trapped via honeypot.');
    return;
  }

  // 2. Client-side field validation
  var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !email || !emailValid || !asin) {
    if (errorBox) {
      var p = errorBox.querySelector('p:last-child');
      if (p) {
        p.innerText = 'Please provide your full name, a valid work email, and your Amazon store URL or ASIN.';
      }
      errorBox.classList.remove('hidden');
    }
    return;
  }

  if (errorBox) {
    errorBox.classList.add('hidden');
  }

  var originalBtnText = submitBtn ? submitBtn.innerText : 'Get My Free Store Audit →';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = 'Submitting Request...';
  }

  var accessKey = form.querySelector('input[name="access_key"]')?.value || '551d55dd-cc97-403d-9929-4713ba42ef1b';

  var payload = {
    access_key: accessKey,
    subject: 'New Free Store Audit Request - Aabzone',
    from_name: 'Aabzone Website',
    name: name,
    email: email,
    asin_store: asin,
    challenge: challenge || 'Not specified',
    form_type: 'Free Store Audit Request Popup'
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
      if (successBox) {
        successBox.classList.remove('hidden');
      }
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err) {
    console.error('Audit submission error:', err);
    if (errorBox) {
      var pErr = errorBox.querySelector('p:last-child');
      if (pErr) {
        pErr.innerText = 'Unable to send request right now. Please try submitting again shortly.';
      }
      errorBox.classList.remove('hidden');
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = originalBtnText;
    }
  }
}

// Hook all audit buttons across pages
document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('[data-open-audit], a[href*="#audit"], a[href="index.html#audit"], button[onclick*="openAuditModal"]');
  triggers.forEach(function (btn) {
    if (btn.id !== 'auditModalSubmitBtn' && btn.id !== 'auditSubmitBtn') {
      btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        openAuditModal();
      });
    }
  });
});
