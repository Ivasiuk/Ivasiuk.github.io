$(document).ready(function() {

		/* MAIN ARRAJ */

	var mainArray = [
		{	name: 'Весілля',
			id: 'wedding',
			descriptText: 'Весільний букет нареченої - невід\'ємна частина весільного образу, який надає особливу романтичність і ніжність дівчині в шлюбній сукні. Важлива роль букету в день весілля підкреслює готовність молодої дівчини одружитися, коли вона приймає флористичне диво з рук свого коханого, передаючи свою естафету щасливої ​​нареченої однієї зі своїх незаміжніх подруг в кінці вечора.',			descriptId: 'demo_wedding',
			sectionClass: 'wedding',
			products: [
				{	name: 'Весільні букети',
					productsClass: '1',
					isAction: '',  /* 'action', 'hit' */
					isNovelty: '',  /* 'new', 60, 70, 80, 100 */
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 40
				},
				{					
					name: 'Оздоблення авто',
					productsClass: '2',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 20
				},{	
					name: 'Оформлення залів',				
					productsClass: '3',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 25
				},{	
					name: 'Весільний букет',				
					productsClass: '4',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 4
				},{	
					name: 'Весільний букет',				
					productsClass: '5',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '6',
					isAction: '',
					isNovelty: '37',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '7',
					isAction: '',
					isNovelty: '100',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '8',
					isAction: '',
					isNovelty: '100',
					oldPrice: 0,
					currentPrice: 999,
					photos: 9
				},{	
					name: 'Весільний букет',				
					productsClass: '9',
					isAction: '',
					isNovelty: 'new',
					oldPrice: 0,
					currentPrice: 999,
					photos: 5
				},{	
					name: 'Весільний букет',				
					productsClass: '10',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 5
				},{	
					name: 'Весільний букет',				
					productsClass: '11',
					isAction: 'hit',
					isNovelty: '80',
					oldPrice: '',
					currentPrice: 999,
					photos: 7
				},{	
					name: 'Весільний букет',				
					productsClass: '12',
					isAction: 'action',
					isNovelty: '60',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '13',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 7
				},{	
					name: 'Весільний букет',				
					productsClass: '14',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 7
				},{	
					name: 'Весільний букет',				
					productsClass: '15',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '16',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '17',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 4
				},{	
					name: 'Весільний букет',				
					productsClass: '18',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '19',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '20',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '21',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 16
				},{	
					name: 'Весільний букет',				
					productsClass: '22',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '23',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '24',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '25',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '26',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '27',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '28',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '29',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 6
				},{	
					name: 'Весільний букет',				
					productsClass: '30',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '31',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 5
				},{	
					name: 'Весільний букет',				
					productsClass: '32',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '33',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '34',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 4
				},{	
					name: 'Весільний букет',				
					productsClass: '35',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 4
				},{	
					name: 'Весільний букет',				
					productsClass: '36',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '37',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '38',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 2
				},{	
					name: 'Весільний букет',				
					productsClass: '39',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 3
				},{	
					name: 'Весільний букет',				
					productsClass: '40',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					currentPrice: 999,
					photos: 7
				}
			]
		},
		{	name: 'Букети з троянд',
			id: 'roses',
			descriptText: "Троянди не залишать байдужою жодну жінку. Зі смаком оформлений букет еквадорських троянд стане універсальним варіантом презенту для круглої дати, першого побачення або Дня народження.</br>Еквадорська троянда користується попитом серед любителів красивих букетів, вона стрімко завойовує позиції на українському ринку квітів.Основна відмінність такого сорту квітів - великі бутони. Завдяки цьому, букети візуально виглядають ще більш пишними і об'ємними. <br>Хороші сорти еквадорських троянд довгий час не в'януть і зберігають свіжий зовнішній вигляд. Вибирайте ці привабливі бутони, якщо хочете максимально продовжити термін життя свого букету. Такі троянди зазвичай відрізняються більш вигідною ціною, ніж аналоги інших сортів. Так, не переплачуючи зайвих грошей, ви отримуєте гарний букет, який довго буде милувати очі.",
			descriptId: 'demo_rose',
			sectionClass: 'roses',
			products: [
				{	name: 'Букет 11 троянд ',
					productsClass: '1',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 5
				},
				{	
					name: 'Весільний букет',				
					productsClass: '2',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 1
				},
				{	
					name: 'Весільний букет',				
					productsClass: '3',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: 'Весільний букет',				
					productsClass: '4',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 1
				},
				{	
					name: 'Весільний букет',				
					productsClass: '5',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 2
				},
				{	
					name: 'Весільний букет',				
					productsClass: '6',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: 'Весільний букет',				
					productsClass: '7',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 1
				},
				{	
					name: 'Весільний букет',				
					productsClass: '8',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 4
				},
				{	
					name: 'Весільний букет',				
					productsClass: '9',
					isAction: '',
					isNovelty: '',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: '5 червоних троянд',				
					productsClass: '5_roz_60_red',
					isAction: '',
					isNovelty: '60',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: '5 білих троянд',				
					productsClass: '5_roz_60_white',
					isAction: '',
					isNovelty: '60',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: '11 червоних троянд',				
					productsClass: '11_roz_60_red',
					isAction: '',
					isNovelty: '60',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 4
				},
				{	
					name: '11 білих троянд',				
					productsClass: '11_roz_60_white',
					isAction: '',
					isNovelty: '60',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: '11 червоних троянд',				
					productsClass: '11_roz_70_red',
					isAction: '',
					isNovelty: '70',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 5
				},
				{	
					name: '11 білих троянд',				
					productsClass: '11_roz_70_white',
					isAction: '',
					isNovelty: '70',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: '25 червоних троянд',				
					productsClass: '25_roz_60_red',
					isAction: '',
					isNovelty: '60',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 5
				},
				{	
					name: '25 білих троянд',				
					productsClass: '25_roz_60_white',
					isAction: '',
					isNovelty: '60',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: '25 червоних троянд',				
					productsClass: '25_roz_70_red',
					isAction: '',
					isNovelty: '70',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 7
				},
				{	
					name: '25 білих троянд',			
					productsClass: '25_roz_70_white',
					isAction: '',
					isNovelty: '70',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 4
				},
				{	
					name: '25 троянд',				
					productsClass: '25_roz_70_pink',
					isAction: '',
					isNovelty: '70',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 3
				},
				{	
					name: '101 червона троянда',				
					productsClass: '101_roz_80_red',
					isAction: '',
					isNovelty: '80',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 4
				},
				{	
					name: '101 біла троянда',				
					productsClass: '101_roz_80_white',
					isAction: '',
					isNovelty: '80',
					oldPrice: 0,
					from: true,
					currentPrice: 999,
					photos: 4
				}
			]			
		},
		{	name: 'Букети мікс',
			id: 'mix',
			descriptText: 'Всі букети, представлені в каталозі нашого магазину, відрізняються стильним зовнішнім виглядом і просто фантастично красиві. </br>Велику цікавість представляють авторські роботи, складені з різних квітів і флористичної зелені. Ці композиції дуже подобаються нашим клієнтам - вони оригінальні і представляють своєрідне відображення внутрішнього світу автора. </br>При бажанні купити квіти недорого, розраховуючи при цьому на неповторність подарунка.',
			descriptId: 'demo_mix',
			sectionClass: 'mix',
			products: [
				{	name: ' ',
					productsClass: '1',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: '',
					productsClass: '2',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '3',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '4',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 7
				},
				{	name: '',
					productsClass: '5',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '6',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '7',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 4
				},
				{	name: '',
					productsClass: '8',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: '',
					productsClass: '9',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '10',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '11',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '12',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '13',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '14',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '15',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '16',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '17',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '18',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '19',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '20',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '21',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '22',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '23',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: '',
					productsClass: '24',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: '',
					productsClass: '25',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '26',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '27',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				}
			]	
		},
		{	name: 'Квіти в коробці',
			id: 'flower_box',
			riptText: 'Квіти в коробці - це новий, найоригінальніший і красивий варіант подарунка для рідних і близьких людей. Тенденція дарувати букети в коробках прийшла в нашу країну зовсім недавно і родом вона з Європи. На даний момент такий подарунок вважається найромантичнішим для коханих дівчат і дружин. </br>Існують різні варіанти складання композицій в капелюшних коробках. Наш магазин пропонує величезний вибір коробок різних розмірів і колірної гами, які можна наповнити великим асортиментом свіжозрізаних квітів. </br>Наші професійні флористи допоможуть підібрати коробку з огляду на всі Ваші побажання, а також оформлять Ваш букет максимально незвично і оригінально.',
			descriptId: 'demo_flower_box',
			sectionClass: 'flower_box',
			products: [
				{	name: ' ',
					productsClass: '1',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '2',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '3',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '4',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '5',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '6',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '7',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '8',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '9',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '10',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '11',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: '',
					productsClass: '12',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: '',
					productsClass: '2',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				}
			]	
		},
		{	name: 'Корзини з квітами',
			id: 'flower_basket',
			descriptText: 'Якщо квіти поштучно або букети Вам не підходять по якихось причин, то можливо рішення купити кошик квітів в "Квітоманії" це саме той варіант, який Ви шукали. </br>Квіткова корзина це вже більш солідне рішення. Як в плані практичності, так і в плані мальовничості. Кошик з квітами зручніше нести і ефектніше вручати. Тільки уявіть як ви даруєте шикарну корзину квітів. Її можна поставити в будь-якому місці, а це значить що Ваш подарунок буде стояти у всіх на виду і виділятися серед всіх інших подарованих квітів. Для неї не потрібно вази, що теж дуже зручно. Сам кошик, в якому будуть знаходитися квіти теж грає роль відмінного декору.</br>Ви можете навіть сказати на яку суму хочете замовити кошик з квітами і ми підберемо для Вас кілька чудових рішень. Якщо Ви хочете купити таку квіткову корзину, якої немає в нашому асортименті то просто повідомте нам всі її деталі. У Вас є її фото? Відмінно! Скиньте нам на пошту або на Viber і ми зробимо все в точності як Ви хочете.',
			descriptId: 'demo_flower_basket',
			sectionClass: 'flower_basket',
			products: [
				{	name: ' ',
					productsClass: '1',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '2',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: '',
					productsClass: '3',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: '',
					productsClass: '4',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '5',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '6',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: '',
					productsClass: '7',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				}
			]	
		},
		{	name: 'Троянди-гіганти',
			id: 'rose_giant',
			descriptText: 'Великі троянди в Тячеві від магазину "Квітоманія" - це ексклюзивні позиції в квітковому світі, які так люблять жінки. Купити великі, метрові троянди &nbsp; і навіть вище (<strong>метрові -</strong> <strong>100 см, півтораметрові - 150 см, а також троянди 160 см</strong>) вы зможете в нашому магазині. Великі, довгі, високі, величезні троянди &nbsp; - як тільки не називають метрові і &nbsp;<span class="word w46">півтораметрові</span>&nbsp;<span class="word w47">троянди</span>.&nbsp; У будь-якому випадку, великі, величезні троянди - це елітний варіант подарунку до якого жодна дівчина не проявить байдужість. Більш того таким подарунком з великих троянд ви підкреслите свій статус.',
			descriptId: 'demo_rose_giant',
			sectionClass: 'rose_giant',
			products: [
				{	name: ' ',
					productsClass: '1',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 4
				},
				{	name: '',
					productsClass: '2',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: '',
					productsClass: '3',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 9
				},
				{	name: '',
					productsClass: '4',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
			]	
		},
		{	name: 'Для чоловіків',
			id: 'for_men',
			descriptText: 'Великі троянди в Тячеві від магазину "Квітоманія" - це ексклюзивні позиції в квітковому світі, які так люблять жінки. Купити великі, метрові троянди &nbsp; і навіть вище (<strong>метрові -</strong> <strong>100 см, півтораметрові - 150 см, а також троянди 160 см</strong>) вы зможете в нашому магазині. Великі, довгі, високі, величезні троянди &nbsp; - як тільки не називають метрові і &nbsp;<span class="word w46">півтораметрові</span>&nbsp;<span class="word w47">троянди</span>.&nbsp; У будь-якому випадку, великі, величезні троянди - це елітний варіант подарунку до якого жодна дівчина не проявить байдужість. Більш того таким подарунком з великих троянд ви підкреслите свій статус.',
			descriptId: 'demo_for_men',
			sectionClass: 'for_men',
			products: [
				{	name: ' ',
					productsClass: '1',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: ' ',
					productsClass: '2',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: ' ',
					productsClass: '3',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: ' ',
					productsClass: '4',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: ' ',
					productsClass: '5',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: ' ',
					productsClass: '6',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 3
				},
				{	name: ' ',
					productsClass: '7',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 2
				},
				{	name: ' ',
					productsClass: '8',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 1
				},
				{	name: ' ',
					productsClass: '9',
					isAction: '',
					isNovelty: '',
					oldPrice: 12+5,
					currentPrice: 5,
					photos: 6
				}
			]	
		},
		{	name: 'Доставка',
			id: 'delivery',
			descriptText: 'Доставка квітів по Тячеву виконується з 8.00 до 22.00 або на вказаний вами час. Вартість послуги доставки по Тячеву - всього від 50 грн. При сумі замовлення квітів та подарунків від 1500 грн і вище - доставка квітів в Тячеві - безкоштовна. Вартість доставки по району уточнюйте. Після дбайливого виконання замовлення менеджер сповістить вас про доставку по смс. Радуйте улюблених свіжими квітами, а ми вам у цьому допоможемо!',
			descriptId: 'demo_delivery',
			sectionClass: 'delivery',
			isAction: '',
			isNovelty: ''
		},
		{	name: 'Наші роботи',
			id: 'ready_works'
		}
	];	


		/* The main function*/
	
	mainFunc(mainArray);

	function mainFunc(arr){
		arr.forEach(function(item, i, arr){
			$('.container ul.menu').append(createNavElements(item));
			$('section.ready-works').before(createSection(item));
		})
			$('section.' + arr[arr.length-1].id).addClass('row_last');
	};

		/* Creating elemens of navbar */

	function createNavElements(objOfSection){
		var $id = '#' + objOfSection.id
		return $('<li>').append($('<a>', {
			href:  $id,
			text: objOfSection.name
		}))
	}

		/* Creating sections */

	function createSection(objOfSection){
		if(!objOfSection.sectionClass) return;
		var section = $('section.row1.hidden').clone().removeClass('hidden').attr('data-section', objOfSection.sectionClass);
		section.find('.title_block h2').attr('id', objOfSection.id).text(objOfSection.name);
		section.find('.cont .description').attr('id', objOfSection.descriptId);
		section.find('.cont button.description_title').attr('data-target', '#' + objOfSection.descriptId);
		section.find('.cont .row p').html(objOfSection.descriptText);
		if(objOfSection.products){
			objOfSection.products.forEach(function(item, i, arr) {
				section.find('.row.prod').append(createProductsBlock(objOfSection.products[i], objOfSection.sectionClass));	
			});
		}	

		return section;
	}


		/* Searching popup photo's arraj */

	function popupphotosCount(array, sect, prod){
		var j = array.filter(function(number){
			return number.sectionClass == sect;
		})[0].products.filter(function(number){
			return number.productsClass == prod;
		})[0];
				
		return j;
	};	


		/* Creating products block */

	function createProductsBlock(objProd, section){
		var product = $('section.row1 .products_block.hidden').first().clone().removeClass('hidden').attr('data-product', objProd.productsClass).addClass(objProd.productsClass),
		img = product.find('.product-image .main_product_image'),
		a = product.find('.products_block a'),
		name = product.find('.product_name'),
		action = product.find('.badges img'),
		novelty = product.find('.badges-roses img'),
		oldPrice = product.find('.product-old-price'),
		price = product.find('.product-price'),
		cl = objProd.productsClass;

		img.attr('src', 'img/sections/' + section + '/' + cl + '/m.jpg');
		name.html(objProd.name);
		a.attr('data-')
		objProd.name ? name.removeClass('no_opasity') : name.addClass('no_opasity');
		objProd.isAction ? action.removeClass('hidden').attr('src', 'img/' + objProd.isAction + '.png') : action.addClass('hidden');
		objProd.isNovelty ? novelty.removeClass('hidden').attr('src', 'img/' + objProd.isNovelty + '.png') : novelty.addClass('hidden');
		objProd.oldPrice ? oldPrice.html(objProd.oldPrice + ' грн') : oldPrice.addClass('hidden');
		objProd.currentPrice ? price.html(objProd.currentPrice + ' грн') : price.addClass('hidden');
		objProd.from ? price.html('від ' + price.html()) : '';


		return product;
	}

		/* Creating photos 'Our works' */

	(function(){
		var countPhoto = 18,
		slideitem1 = $('.slides .slideitem-1 a'),
		slideitem2 = $('.slides .slideitem-2 a'),
		slideitem3 = $('.slides .slideitem-3 a'),
		slideitem4 = $('.slides .slideitem-4 a'),
		slideitem5 = $('.slides .slideitem-5 a');

		for (var i = 1; i < countPhoto; i++) {
			slideitem1.append($('<img>', {
			alt:  'Наші роботи',
			src: 'img/ready-works/' + i + '.jpg'
			}));
			slideitem2.append($('<img>', {
			alt:  'Наші роботи',
			src: 'img/ready-works/' + i + '.jpg'
			}));
			slideitem3.append($('<img>', {
			alt:  'Наші роботи',
			src: 'img/ready-works/' + i + '.jpg'
			}));
			slideitem4.append($('<img>', {
			alt:  'Наші роботи',
			src: 'img/ready-works/' + i + '.jpg'
			}));
			slideitem5.append($('<img>', {
			alt:  'Наші роботи',
			src: 'img/ready-works/' + i + '.jpg'
			}));
		}
		$(slideitem1.find('img')[0]).addClass('showed');
		$(slideitem2.find('img')[1]).addClass('showed');
		$(slideitem3.find('img')[2]).addClass('showed');
		$(slideitem4.find('img')[3]).addClass('showed');
		$(slideitem5.find('img')[4]).addClass('showed');
	

		
	})()

		/* Slider */

	var images_1 = document.querySelectorAll('.ready-works .slides .slideitem-1 img'),
		images_2 = document.querySelectorAll('.ready-works .slides .slideitem-2 img'),
		images_3 = document.querySelectorAll('.ready-works .slides .slideitem-3 img'),
		images_4 = document.querySelectorAll('.ready-works .slides .slideitem-4 img'),
		images_5 = document.querySelectorAll('.ready-works .slides .slideitem-5 img');
    			
    var slider = new Slider(images_1, images_2);
    
    document.querySelector('.ready-works .slides .prevButton').onclick = function(){
        slider.prev();
    }
 
    document.querySelector('.ready-works .slides .nextButton').onclick = function(){
        slider.next();
    }

    function Slider(images_1, images_2) {
	    this.images_1 = images_1;
	    this.images_2 = images_2;
	    this.images_3 = images_3;
	    this.images_4 = images_4;
	    this.images_5 = images_5;
	    var one = 0, two = 1, three = 2, four = 3, five = 4;

	    this.prev = function () {
	        this.images_1[one].classList.remove('showed');
	        this.images_2[two].classList.remove('showed');
	        this.images_3[three].classList.remove('showed');
	        this.images_4[four].classList.remove('showed');
	        this.images_5[five].classList.remove('showed');
	        one--; two--; three--; four--; five--;
	        one < 0 ? one = this.images_1.length - 1 : one;
	        two < 0 ? two = this.images_2.length - 1 : two;  
	        three < 0 ? three = this.images_3.length - 1 : three;  
	        four < 0 ? four = this.images_4.length - 1 : four;  
	        five < 0 ? five = this.images_5.length - 1 : five;   
	        this.images_1[one].classList.add('showed');
	        this.images_2[two].classList.add('showed');
	        this.images_3[three].classList.add('showed');
	        this.images_4[four].classList.add('showed');
	        this.images_5[five].classList.add('showed');
	    }

	    this.next = function () {
	        this.images_1[one].classList.remove('showed');
	        this.images_2[two].classList.remove('showed');
	        this.images_3[three].classList.remove('showed');
	        this.images_4[four].classList.remove('showed');
	        this.images_5[five].classList.remove('showed');
	        one++; two++; three++; four++; five++;
	        one >= this.images_1.length ? one = 0 : one;
	        two >= this.images_2.length ? two = 0 : two;
	        three >= this.images_3.length ? three = 0 : three;
	        four >= this.images_4.length ? four = 0 : four;
	        five >= this.images_5.length ? five = 0 : five;
	        this.images_1[one].classList.add('showed');
	        this.images_2[two].classList.add('showed');
	        this.images_3[three].classList.add('showed');
	        this.images_4[four].classList.add('showed');
	        this.images_5[five].classList.add('showed');
	    }
	}


	/* Scrolling */

   $('.menu li a').on('click', function (e) {
        e.preventDefault();
        
        $('.menu li a').removeClass('active').filter(this).addClass('active');
        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').animate({
            scrollTop: h.offset().top - 130
        }, 1500);       
    });


   		/* Button "Up" */

    var btnTop = $('.btn_top');
	$(window).on('scroll', function(e){
   		if ($(window).scrollTop() >= 400){
   			btnTop.fadeIn()
   		} else {
   			btnTop.fadeOut()
   		}
    })

	btnTop.on('click', function(){
		$("html,body").animate({scrollTop:0}, 900)		
	});

		/* Popup-slider */

	function popupSlider(){	            
		var images = $('.modal_product .photos img.load');
	    var slider = new Slider(images);         
	    
	    $('.modal_product .left').on('click', function(){
	        slider.prev();
	    });
	    $('body').keydown(function(e){
	      	if(e.which === 37){slider.prev()}
	      	else if(e.which === 39){slider.next()}
	    })
	 
	    $('.modal_product .right').on('click', function(){
	        slider.next();
	    });
	  
	    function Slider(images) {
		    this.images = images;
		    var i = 0;
		    this.prev = function () {
		        $(this.images[i]).hide();
		        i--;
		        if (i < 0) {
		            i = this.images.length - 1;
		        }	       
		        $(this.images[i]).show();
		    }
		    this.next = function () {
		         $(this.images[i]).hide();
		        i++;
		        if (i >= this.images.length) {
		            i = 0;
		        }
		        $(this.images[i]).show();
		    }
		}

	};	


		/* Popup */	

	(function(){

	    function Popup(options){
	        this.modal = $(options.modal);
	        this.overlay = $(options.overlay);
	        
	        var popup = this;
	        
	        this.open = function(ph, pr, s){
	            popup.overlay.addClass('open');
	            popup.modal.addClass('open');
	            if(ph){
	            	var modal_photos = $('.modal_product .photos .images_wrap');
	            	$('.modal_product .photos img').remove();
	            	ph < 2 ? $('.arrow').addClass('hidden') : $('.arrow').removeClass('hidden'); 
	            	for(var i = 1; i < ph+1; i++ ){
	            		modal_photos.append($('<img>').addClass('load').attr('src', 'img/sections/' + s + '/' + pr + '/' + i + '.jpg').attr('alt', 'Photo'));
	            	}	 
	            	$($('.modal_product .photos img.load')[0]).show();           
	            }	
	            popupSlider();
	        }	        
	        this.close = function(){
	            popup.overlay.removeClass('open');
	            popup.modal.removeClass('open');
	            $('.modal_product .photos img.load').remove();
	        }	        
	        $('.modal_product .close').on('click', popup.close);
	        $('body').keydown(function(e){
	        	if(e.which === 27){popup.close()}
	        })
	    }

	        var p = new Popup({
		        modal: '.modal_product',
		        overlay: '.overlay_product'
	        });	        
	        $('.products_block a').on('click', function(e){
				e.preventDefault();
				var section = $(e.target.closest('section')).attr('data-section');
				var product = $(e.target.closest('.products_block')).attr('data-product');
				var photosCount = popupphotosCount(mainArray, section, product).photos;
				p.open(photosCount, product, section);
				

			});	
	           
	})();

		$("#dlform").submit(function() { //Change
			alert('ew');
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});