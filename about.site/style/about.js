document.querySelectorAll('.marquee').forEach((marquee) => {
  const content = marquee.innerHTML;
  marquee.innerHTML += content; // 내용이 반복되도록 설정
});
