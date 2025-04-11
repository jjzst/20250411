let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 建立全視窗畫布
  background('#fefae0'); // 設定背景顏色
  
  // 產生40個圓的初始資料
  for (let i = 0; i < 40; i++) {
    let circle = {
      x: random(width), // 隨機X座標
      y: random(height), // 隨機Y座標
      size: random(30, 100), // 隨機大小
      color: color(random(255), random(255), random(255)) // 隨機鮮豔顏色
    };
    circles.push(circle);
  }
}

function draw() {
  background('#fefae0'); // 每次重繪背景
  
  for (let circle of circles) {
    let dynamicSize = map(mouseX, 0, width, 10, 120); // 根據滑鼠X位置調整大小
    fill(circle.color); // 設定圓的顏色
    noStroke(); // 移除圓的邊框
    ellipse(circle.x, circle.y, dynamicSize, dynamicSize); // 繪製圓
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}