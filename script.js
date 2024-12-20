function showTab(tabId) {
    // Tüm tab içeriklerini gizle
    const tabContents = document.querySelectorAll('.tab-item');
    tabContents.forEach(content => content.style.display = 'none');

    // Tüm tab butonlarından 'active' sınıfını kaldır
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Seçilen sekmenin içeriğini göster
    document.getElementById(tabId + '-content').style.display = 'block';

    // Seçilen sekmenin butonunu aktif yap
    document.getElementById(tabId + '-button').classList.add('active');
}

// Sayfa yüklendiğinde ilk sekmeyi göster
document.addEventListener('DOMContentLoaded', () => {
    showTab('tab1');
});
