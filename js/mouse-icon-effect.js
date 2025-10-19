document.addEventListener("DOMContentLoaded", function () {
  // 外部图片 URL 列表（可替换为你自己的图标）
  const iconImageUrls = [
    "https://bang-dream.com/img/top/event-banner-pager-current.png",
  ];

  let currentIconIndex = 0;

  const createIcon = (x, y) => {
    const iconImageUrl = iconImageUrls[currentIconIndex];
    const icon = document.createElement("img");
    icon.className = "mouse-icon";
    icon.src = iconImageUrl;

    // 随机大小：20px ~ 40px
    const size = Math.random() * 20 + 20;
    icon.style.width = `${size}px`;
    icon.style.height = `${size}px`;

    // 初始位置
    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;

    // 随机飞溅方向和距离
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 60 + 120;
    const duration = Math.random() * (1.2 - 0.6) + 0.6;

    const translateX = Math.cos(angle) * distance;
    const translateY = Math.sin(angle) * distance;

    // 添加动画
    icon.animate(
      [
        { transform: "translate(0, 0) rotate(0deg) scale(1)", opacity: 1 },
        {
          transform: `translate(${translateX}px, ${translateY}px) rotate(360deg) scale(0)`,
          opacity: 0,
        },
      ],
      {
        duration: duration * 1000,
        easing: "cubic-bezier(0.2, 0.8, 0.8, 0.2)",
        fill: "forwards",
      }
    );

    document.body.appendChild(icon);

    // 动画结束后移除
    setTimeout(() => {
      if (icon.parentNode) {
        icon.remove();
      }
    }, duration * 500);
  };

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const offsetX = x + (Math.random() - 0.5) * 10;
    const offsetY = y + (Math.random() - 0.5) * 10;
    createIcon(offsetX, offsetY);

    // 更新下一个图标索引
    currentIconIndex = (currentIconIndex + 1) % iconImageUrls.length;
  });
});
