const copyButton = document.querySelector('#copy-email');
const toast = document.querySelector('#toast');
const email = 'hello@maraellison.com';

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    toast.classList.add('show');
    copyButton.innerHTML = 'Copied <span aria-hidden="true">✓</span>';
    window.setTimeout(() => {
      toast.classList.remove('show');
      copyButton.innerHTML = 'Copy email <span aria-hidden="true">↗</span>';
    }, 2200);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
