var container = document.getElementById('container');
			
			var characters  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		     // 定義一個陣列 
			
               var charactersLength = characters.length;
               // 產生大小為26的亂數
               function makeid()// makeid是產生亂數
               {
                    var rand  = [];
                    // initialize
                   
                    for ( var i = 0; i < 5; i++ ) 
                    {
                    rand.push(characters[(Math.floor(Math.random() * charactersLength))]);
                    // randon()會產生0-1間的亂數，charactersLength=26，floor是無條件捨去，補充:round是四捨五入
                    // 產生範圍0-25
                    // push是把東西放到陣列最後，並自動把arr大小增加(不用另外寫)
                    }
		          return rand;
			}

			var result=makeid();
			for(let i=0;i<result.length;i++)
			{
				container.textContent +=result[i];
                    // 把剛才的變數印出
			}

			function insertValue()
			{
				result.unshift(characters[(Math.floor(Math.random() * charactersLength))]);
				// arr.unshift(value) 插入值
				print();
			}
			function print()
			{
				container.innerText=''

				for(let i=0;i<result.length;i++)
				{
					container.innerText +=result[i];
				}
			}

			var trigger=true;
			window.addEventListener('keyup', insert);
			window.addEventListener('keydown',deleteValue);
			
			function insert()
			{
				if(trigger)
				interval=window.setInterval(insertValue,400)
					// 每秒2.5個字=一個字0.4秒，這裡的單位是毫秒，每過400毫秒執行一次
				trigger=false;
			}

			function deleteValue(e)
			{
				var index=result.length-1;
				if(e.key==result[index])
				{
					result.pop();
					console.log(index);
					consult.log(result[index]);
					print();

				}

			}
			console.log(trigger);
			
               // index範圍設為最大長度-1(a[0]~a[index-1])
               // .length是內建算長度的

			// function print(e)
               // // 要驗證使用者端
			// {
               //      var index =result.length-1;
			// 	if(e.key==result[index])
               //      // e.key是使用者按的按鈕，index是螢幕顯示
               //      // result[index]是最右邊的
			// 	{
			// 		result.pop();
               //           // 拿掉最後一個並自動將arr size-1
			// 		index--;
			// 		console.log(index);
			// 		console.log(result[index]);
			// 		container.innerText=''
               //           // 清空
               //           result.unshift(characters[(Math.floor(Math.random() * charactersLength))]);
					
               //           for(let i=0;i<=index;i++)
			// 		{
			// 			container.innerText +=result[i];
			// 		}

                         
			// 	}
			// 	console.log(e.key);
			// 	console.log(result[index]);
			// 	//container.textContent += e.key;
			// 	// if (e.key == 'Enter') {
			// 	// 	container.textContent = '';
			// 	// }
			// }
			
			// console.log(makeid());


               