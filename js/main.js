document.addEventListener('DOMContentLoaded', () => {
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const closeButtons = document.querySelectorAll('.close-button');
    const modals = document.querySelectorAll('.modal');

    // モーダルを閉じる関数
    const closeModal = (modal) => {
        if (!modal) return;
        modal.classList.remove('is-active');
        document.body.style.overflow = ''; // 背景のスクロールを許可
    };

    // モーダル表示イベント
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); // デフォルトのリンク動作（ページ遷移）をキャンセル
            const targetId = trigger.dataset.modalTarget; // data-modal-targetの値を取得
            const modal = document.getElementById(targetId); // 該当するモーダル要素を取得

            if (modal) {
                modal.classList.add('is-active'); // モーダルを表示するクラスを追加
                document.body.style.overflow = 'hidden'; // 背景のスクロールを禁止
            }
        });
    });

    // 閉じるボタンクリックイベント
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); // 最も近い親の.modal要素を取得
            closeModal(modal);
        });
    });

    // モーダルのオーバーレイ部分をクリックしたときにモーダルを閉じる
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { // クリックされたのがモーダルのオーバーレイ部分であれば閉じる
                closeModal(modal);
            }
        });
    });

    // Escキーでモーダルを閉じるイベント
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.is-active'); // 現在開いているモーダルを取得
            closeModal(activeModal);
        }
    });
});