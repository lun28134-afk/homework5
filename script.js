document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    const checklistContainer = document.querySelector('.checklist');

    if (loginBtn) {
        loginBtn.addEventListener('click', (event) => {
            event.preventDefault();

            const email = document.querySelector('input[type="text"]').value;
            const password = document.querySelector('input[type="password"]').value;

            if (email === "" || password === "") {
                alert("請輸入電子郵件與密碼以進行模擬登入。");
            } else {
                alert(
                    "🚨 【資安警報：這是一個教學模擬頁面】\n\n" +
                    "剛才你點擊了登入，在現實的釣魚網站中，你的帳號與密碼此刻已經被傳送到黑客的資料庫中。\n\n" +
                    "💡 防詐小撇步：\n" +
                    "1. 永遠檢查網址列是否為官方域名 (discord.com)。\n" +
                    "2. 官方絕對不會透過 GitHub Pages 進行登入驗證。"
                );
            }
        });
    }

    if (checkboxes.length > 0) {
        checkboxes.forEach(box => {
            box.addEventListener('change', () => {
                const checkedCount = document.querySelectorAll('.checklist input:checked').length;
                const totalCount = checkboxes.length;

                if (checkedCount > 0) {
                    checklistContainer.style.transition = "all 0.5s";
                    checklistContainer.style.borderLeft = `${(checkedCount / totalCount) * 10}px solid #3ba55c`;
                }

                if (checkedCount === totalCount) {
                    checklistContainer.style.backgroundColor = "rgba(59, 165, 92, 0.1)";
                    checklistContainer.style.borderColor = "#3ba55c";
                    
                    setTimeout(() => {
                        alert("🎉 太棒了！你已完成所有安全設置。\n你的 Discord 帳號現在具備極高的防護等級！");
                    }, 300);
                } else {
                    checklistContainer.style.backgroundColor = "#2b2d31";
                    checklistContainer.style.borderColor = "transparent";
                }
            });
        });
    }
});