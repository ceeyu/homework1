var container = document.getElementById('container')
document.addEventListener('keydown', print);
			// 監聽事件，keyup，並執行print函式
			function print(e)
               // 自己寫的print函式
			{
				console.log(e.key);
                    // e.key是當使用者打字時(.key是內建函式)
				container.textContent += e.key;
				// =innerText，字母會疊加
			}