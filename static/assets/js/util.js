(function($) {

	/*	Generate an indented list of links from a nav. Meant for use with panel().
		@return {jQuery} jQuery object.
	*/
	$.fn.navList = function() {
		var	$this = $(this);
			$a = $this.find('a'),
			b = [];

		b.push(`
			<a class="sidebar-item" href="./">
				<div class="sidebar-icon">
					<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M50.0007 23.7083L70.834 42.4583V75H62.5007V50H37.5007V75H29.1673V42.4583L50.0007 23.7083ZM50.0007 12.5L8.33398 50H20.834V83.3333H45.834V58.3333H54.1673V83.3333H79.1673V50H91.6673L50.0007 12.5Z" fill="currentColor"/>
					</svg>
				</div>
				<div class="sidebar-text">Home</div>
			</a>
		`);
		
		b.push(`
			<a class="sidebar-item" href="standard">
				<div class="sidebar-icon">
					<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M50.0007 20.833C52.2108 20.833 54.3304 21.711 55.8932 23.2738C57.456 24.8366 58.334 26.9562 58.334 29.1663C58.334 30.1663 58.1673 31.1247 57.834 32.0413C74.7923 35.4163 87.5007 49.6247 87.5007 66.6663H12.5007C12.5007 49.6247 25.209 35.4163 42.1673 32.0413C41.834 31.1247 41.6673 30.1663 41.6673 29.1663C41.6673 26.9562 42.5453 24.8366 44.1081 23.2738C45.6709 21.711 47.7905 20.833 50.0007 20.833ZM91.6673 79.1663H8.33398V70.833H91.6673V79.1663ZM50.0007 39.583C37.0423 39.583 26.0423 47.458 22.2507 58.333H77.7507C73.959 47.458 62.959 39.583 50.0007 39.583Z" fill="currentColor"/>
					</svg>
				</div>
				<div class="sidebar-text">The Luks Lofts Hotel Standard</div>
			</a>
		`);

		b.push(`
			<a class="sidebar-item" href="lofts">
				<div class="sidebar-icon">
					<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M83.334 41.6663V29.1663C83.334 26.9562 82.456 24.8366 80.8932 23.2738C79.3304 21.711 77.2108 20.833 75.0007 20.833H25.0007C22.7905 20.833 20.6709 21.711 19.1081 23.2738C17.5453 24.8366 16.6673 26.9562 16.6673 29.1663V41.6663C14.4572 41.6663 12.3376 42.5443 10.7748 44.1071C9.21196 45.6699 8.33398 47.7895 8.33398 49.9997V70.833H13.8757L16.6673 79.1663H20.834L23.6257 70.833H76.3757L79.1673 79.1663H83.334L86.1257 70.833H91.6673V49.9997C91.6673 47.7895 90.7894 45.6699 89.2265 44.1071C87.6637 42.5443 85.5441 41.6663 83.334 41.6663ZM54.1673 29.1663H75.0007V41.6663H54.1673V29.1663ZM25.0007 29.1663H45.834V41.6663H25.0007V29.1663ZM83.334 62.4997H16.6673V49.9997H83.334V62.4997Z" fill="currentColor"/>
					</svg>
				</div>
				<div class="sidebar-text">The Lofts</div>
			</a>
		`);

		b.push(`
			<a class="sidebar-item" href="cafe">
				<div class="sidebar-icon">
					<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33.7494 55.5834L16.291 38.1667C9.79102 31.625 9.79102 21.0834 16.291 14.5834L45.541 43.7501L33.7494 55.5834ZM61.9994 48.0417L55.8744 54.1667L84.541 82.8334L78.666 88.7084L49.9994 60.0417L21.3327 88.7084L15.4577 82.8334L56.1244 42.1667C53.166 35.7917 55.2494 26.8334 61.8744 20.2084C69.8327 12.2084 81.2494 10.7084 87.3327 16.7917C93.4577 22.9167 91.9577 34.3334 83.9577 42.2917C77.3327 48.9167 68.3744 51.0001 61.9994 48.0417Z" fill="currentColor"/>
					</svg>
				</div>
				<div class="sidebar-text">Luks Cafe</div>
			</a>
		`);

		b.push(`
			<a class="sidebar-item" href="spa">
				<div class="sidebar-icon">
					<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M64.584 40.1247C59.209 42.9997 54.2923 46.6663 50.0007 51.083C45.709 46.6247 40.7923 42.958 35.4173 40.1247C36.4173 28.583 41.334 17.2497 50.2507 8.33301C59.084 17.1663 63.7923 28.4997 64.584 40.1247ZM50.0007 64.3747C58.959 50.708 74.2507 41.6663 91.6673 41.6663C91.6673 83.333 52.834 91.1663 50.0007 91.6664C47.1673 91.208 8.33398 83.333 8.33398 41.6663C25.7507 41.6663 41.0423 50.708 50.0007 64.3747ZM50.209 21.6247C47.459 25.958 45.5423 30.7497 44.5007 35.7497L50.0007 39.7913L55.6257 35.708C54.6673 30.708 52.834 25.9163 50.209 21.6247ZM50.0007 83.208C50.0007 83.208 75.0007 79.1663 82.2507 51.0413C58.334 58.333 50.0007 79.583 50.0007 79.583C50.0007 79.583 37.5007 54.1663 17.7507 51.083C25.0007 79.1663 50.0007 83.208 50.0007 83.208Z" fill="currentColor"/>
					</svg>	
				</div>
				<div class="sidebar-text">Luks Spa</div>
			</a>
		`);

		b.push(`
			<a class="sidebar-item" href="activities">
				<div class="sidebar-icon">
					<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_283_429)">
							<path d="M35.416 60.417L16.666 79.167L22.916 85.417L37.4993 70.8337H45.8327L35.416 60.417ZM62.4993 4.16699C60.2892 4.16699 58.1696 5.04497 56.6068 6.60777C55.044 8.17057 54.166 10.2902 54.166 12.5003C54.166 14.7105 55.044 16.8301 56.6068 18.3929C58.1696 19.9557 60.2892 20.8337 62.4993 20.8337C64.7095 20.8337 66.8291 19.9557 68.3919 18.3929C69.9547 16.8301 70.8327 14.7105 70.8327 12.5003C70.8327 10.2902 69.9547 8.17057 68.3919 6.60777C66.8291 5.04497 64.7095 4.16699 62.4993 4.16699ZM87.4993 87.5003L74.9993 100L62.4993 87.5003V81.2503L32.9577 51.7087C31.666 51.917 30.416 52.0837 29.166 52.0837V43.0003C36.0827 43.1253 44.2077 39.3753 48.6243 34.5003L54.4577 28.042C55.2493 27.0837 56.2493 26.4587 57.3327 25.9587C58.541 25.3753 59.916 25.0003 61.3327 25.0003H61.4577C66.666 25.0003 70.8327 29.167 70.8327 34.417V58.3337C70.8327 61.8753 69.3743 65.0837 66.9993 67.3753L52.0827 52.4587V43.0003C49.4577 45.167 46.1243 47.2503 42.541 48.792L68.7493 75.0003H74.9993L87.4993 87.5003Z" fill="currentColor"/>
						</g>
						<defs>
							<clipPath id="clip0_283_429">
								<rect width="100" height="100" fill="white"/>
							</clipPath>
						</defs>
					</svg>
				</div>
				<div class="sidebar-text">Area &amp; Activities</div>
			</a>
		`);

	


		b.push(`
			<a class="sidebar-item with-separator--top" href="policy">
				<div class="sidebar-icon">
					<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M73.3885 21.1592C73.3885 19.4268 71.9618 18 70.2293 18H29.1592C27.4268 18 26 19.4268 26 21.1592V78.8408C26 80.5733 27.4268 82 29.1592 82H70.3312C72.0637 82 73.4905 80.5733 73.4905 78.8408L73.3885 21.1592ZM70.7389 78.3312H28.6497V21.6688H34.4586V33.2866L39.1465 28.5987L43.9363 33.3885V21.6688H70.8408V78.3312H70.7389Z" fill="currentColor"/>
						<path d="M35.5797 38.8917C35.0701 38.8917 34.5605 39.2994 34.5605 39.9108V40.9299C34.5605 41.3376 34.9682 41.949 35.5797 41.949H63.809C64.3185 41.949 64.8281 41.5414 64.8281 40.9299V39.9108C64.8281 39.5032 64.4204 38.8917 63.809 38.8917H35.5797Z" fill="currentColor"/>
						<path d="M35.5797 51.121H63.809C64.3185 51.121 64.8281 50.7134 64.8281 50.1019V49.0828C64.8281 48.6752 64.4204 48.0637 63.809 48.0637H35.5797C35.0701 48.0637 34.5605 48.4714 34.5605 49.0828V50.1019C34.6625 50.6115 35.0701 51.121 35.5797 51.121Z" fill="currentColor"/>
						<path d="M64.8281 59.3757V58.3566C64.8281 57.949 64.4204 57.3375 63.809 57.3375H35.5797C35.0701 57.3375 34.5605 57.7452 34.5605 58.3566V59.3757C34.5605 59.7834 34.9682 60.3949 35.5797 60.3949H63.809C64.3185 60.3949 64.8281 59.8853 64.8281 59.3757Z" fill="currentColor"/>
						<path d="M63.8083 66.5096H48.6236C48.114 66.5096 47.6045 66.9172 47.6045 67.5287V68.5478C47.6045 68.9554 48.0121 69.5669 48.6236 69.5669H63.8083C64.3179 69.5669 64.8274 69.1593 64.8274 68.5478V67.5287C64.8274 67.121 64.3179 66.5096 63.8083 66.5096Z" fill="currentColor"/>
					</svg>

				</div>
				<div class="sidebar-text">Policy</div>
			</a>

			<a class="sidebar-item" href="location">
				<div class="sidebar-icon">
					<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M50.5 84.9C49.8 84.9 49.2 84.6 48.7 84.2C47.8 83.3 26 61.8 26 40.2C26 22.2 41.4 16.5 49.6 16C50.2 16 50.8 16 51.3 16C52.3 16.1 74.9 17.8 74.9 40.2C74.9 61.8 53.1 83.2 52.2 84.1C51.7 84.6 51.1 84.9 50.5 84.9ZM50.5 21C50.3 21 50.1 21 49.8 21C49.1 21.1 31 22.4 31 40.2C31 56.3 45.4 73.3 50.5 78.7C55.6 73.2 70 56.3 70 40.2C70 22.4 51.8 21 51 21C50.8 21 50.7 21 50.5 21Z" fill="currentColor"/>
						<path d="M50.4998 53.9C43.4998 53.9 37.7998 48.2 37.7998 41.2C37.7998 34.2 43.4998 28.5 50.4998 28.5C57.4998 28.5 63.1998 34.2 63.1998 41.2C63.1998 48.2 57.3998 53.9 50.4998 53.9ZM50.4998 33.6C46.2998 33.6 42.7998 37 42.7998 41.3C42.7998 45.6 46.1998 49 50.4998 49C54.7998 49 58.1998 45.6 58.1998 41.3C58.1998 37 54.6998 33.6 50.4998 33.6Z" fill="currentColor"/>
					</svg>			
				</div>
				<div class="sidebar-text">Location</div>
			</a>

			<a class="sidebar-item" href="gallery">
				<div class="sidebar-icon">
				<svg width="47" height="35" viewBox="0 0 50 75" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M51.752 0H8.24798C3.71968 0 0 3.71968 0 8.24798V51.752C0 56.2803 3.71968 60 8.24798 60H51.752C56.2803 60 60 56.2803 60 51.752V8.24798C60 3.71968 56.2803 0 51.752 0ZM3.2345 51.752V36.0647L11.8059 30.0809C13.7466 28.7871 16.3342 28.7871 18.1132 30.4043L48.3558 56.7655H8.24798C5.49865 56.7655 3.2345 54.5013 3.2345 51.752ZM56.7655 51.752C56.7655 54.1779 55.1482 56.1186 52.8841 56.6038L20.2156 27.9784C17.3046 25.3908 13.0997 25.2291 9.86523 27.4933L3.2345 32.0216V8.24798C3.2345 5.49865 5.49865 3.2345 8.24798 3.2345H51.752C54.5013 3.2345 56.7655 5.49865 56.7655 8.24798V51.752Z" fill="#615959"/>
					<path d="M40.7536 5.49847C33.9612 5.49847 28.3008 10.9971 28.3008 17.9513C28.3008 24.9055 33.7994 30.4041 40.7536 30.4041C47.7078 30.4041 53.2064 24.9055 53.2064 17.9513C53.2064 10.9971 47.7078 5.49847 40.7536 5.49847ZM40.7536 27.1696C35.7401 27.1696 31.5353 23.1265 31.5353 17.9513C31.5353 12.9378 35.5784 8.73298 40.7536 8.73298C45.7671 8.73298 49.9719 12.7761 49.9719 17.9513C49.9719 22.9648 45.9288 27.1696 40.7536 27.1696Z" fill="#615959"/>
				</svg>

				

				</div>
				<div class="sidebar-text">Gallery</div>
			</a>
			

			<a class="sidebar-item" href="contact">
				<div class="sidebar-icon">
				<svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_310_540)">
						<path d="M79.1229 67.4198L72.2855 58.5714C70.9449 56.8286 69.202 55.7561 67.3251 55.4879C65.3141 55.2198 63.3031 55.7561 61.5603 57.2308L59.4152 58.8396L56.868 60.8506C56.5998 60.7165 56.4658 60.5824 56.1976 60.4484C55.7954 60.1802 55.2592 59.9121 54.991 59.644C51.1031 56.2923 47.6174 52.2703 44.668 47.578C43.5954 45.7011 42.5229 43.8242 41.7185 41.5451C42.5229 40.8747 43.4614 40.3385 44.2658 39.6681L46.5449 37.9253C48.4218 36.4506 49.4943 34.7077 49.7625 32.6967C50.0306 30.6857 49.3603 28.6747 48.0196 26.9319L44.668 22.5077C44.2658 21.9714 43.8636 21.5692 43.5954 21.033C42.791 19.9604 41.9866 18.8879 41.1822 18.0835C38.5009 14.5978 34.0768 14.0615 30.457 16.7429L27.7757 18.6198L24.6921 21.033C22.5471 22.7758 21.0724 24.9209 20.5361 27.7363C19.7317 31.7582 20.268 35.6462 21.0724 38.8637C22.6812 45.433 25.3625 51.8681 29.7866 58.8396C35.1493 67.1517 41.9866 74.1231 50.2987 79.4857C53.5163 81.4967 57.8064 83.9099 62.7669 84.8484C63.7053 84.9824 64.5097 85.1165 65.4482 85.1165C67.7273 85.1165 70.0064 84.7143 73.0899 82.3011C73.0899 82.3011 74.9669 80.8264 76.0394 80.022C76.0394 80.022 80.7317 76.1341 81.1339 73.1846C81.1339 71.0396 80.5976 69.1626 79.1229 67.4198ZM66.5207 60.7165C67.191 60.8506 67.5932 61.2528 67.9954 61.789L74.9669 70.7714C75.5031 71.3077 75.6372 71.978 75.6372 72.3802C75.5031 73.0506 75.1009 73.5868 74.6987 73.989L64.9119 61.3868C65.18 61.1187 65.8504 60.7165 66.5207 60.7165ZM36.7581 21.4352C37.5625 22.3736 38.2328 23.3121 39.0372 24.3846C39.4394 24.9209 39.8416 25.4571 40.2438 25.8593L43.5954 30.2835C43.9976 30.8198 44.3998 31.4901 44.2658 32.1604C44.1317 32.8308 43.5954 33.367 43.0592 33.7692L33.1383 21.167L33.4064 21.033C34.7471 20.0945 35.8196 20.0945 36.7581 21.4352ZM69.3361 78.1451C67.7273 79.4857 65.8504 79.8879 63.7053 79.4857C60.4877 78.8154 57.2702 77.4747 53.1141 74.7934C45.4724 69.967 39.0372 63.5319 34.2108 55.8901C30.0548 49.4549 27.5075 43.6901 26.1669 37.6571C25.6306 34.9758 25.0943 31.7582 25.6306 28.8088C26.0328 27.3341 26.7031 26.2615 27.9097 25.3231L28.9823 24.3846L38.9031 36.9868C38.5009 37.2549 38.0987 37.5231 37.6965 37.7912C36.7581 38.4615 35.8196 39.8022 36.3559 41.8132C37.1603 45.0308 38.635 47.7121 40.1097 50.2593C43.3273 55.4879 47.0812 59.9121 51.5053 63.6659C52.1757 64.2022 52.7119 64.6044 53.2482 64.8725C53.6504 65.1407 54.1866 65.4088 54.4548 65.6769C54.5888 65.6769 54.5888 65.811 54.7229 65.811C56.1976 66.8835 57.9405 66.7495 59.2812 65.5429L60.4877 64.6044L70.2746 77.2066C70.0064 77.6088 69.6042 77.8769 69.3361 78.1451Z" fill="currentColor"/>
					</g>
					<defs>
						<clipPath id="clip0_310_540">
							<rect width="61" height="70.1165" fill="white" transform="translate(20 15)"/>
						</clipPath>
					</defs>
				</svg>				
				</div>
				<div class="sidebar-text">Contact Us</div>
			</a>

			<a class="sidebar-item with-separator--bottom" href="careers">
				<div class="sidebar-icon">
				<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M46.9268 82C38.8293 81.5122 31.2195 78.6829 24.5854 73.9025C24.1951 73.6098 24 73.2195 24 72.7317V63.6586C24 56.9269 29.4634 51.4634 36.1951 51.4634C36.2927 51.4634 37.9512 51.561 39.0244 50.5854C39.5122 50.0976 40.2927 50.0976 40.878 50.5854C42.0488 51.561 43.2195 52.2439 44.5854 52.8293C45.1707 53.122 45.561 53.8049 45.3658 54.4878C45.2683 54.8781 45.0732 55.1708 44.878 55.3659L41.561 61.2195L48.3902 79.9512C48.5854 80.439 48.4878 80.9269 48.1951 81.3171C47.8049 81.8049 47.4146 82 46.9268 82ZM26.9268 71.9512C32.2927 75.6586 38.439 78.0976 44.7805 78.8781L38.5366 61.6098C38.439 61.2195 38.439 60.7317 38.6341 60.3415L41.8537 54.683C41.1707 54.2927 40.4878 53.9025 39.9024 53.4147C38.1463 54.3903 36.2927 54.2927 36.0976 54.2927C31.1219 54.2927 26.9268 58.3903 26.9268 63.561V71.9512Z" fill="currentColor"/>
					<path d="M52.7804 81.9999C52.2926 81.9999 51.9023 81.8048 51.6096 81.4145C51.3169 81.0243 51.2194 80.5365 51.4145 80.0487L58.3413 61.317L54.9267 55.5609C54.634 55.3658 54.4389 55.0731 54.3413 54.6828C54.2438 53.9999 54.5365 53.317 55.1218 53.0243C56.5852 52.3414 57.6584 51.6584 58.634 50.7804C59.2194 50.2926 60.0974 50.2926 60.6828 50.878C61.3657 51.5609 62.9267 51.6584 63.3169 51.6584H63.4145C70.3413 51.6584 75.7072 57.0243 75.7072 63.8536V72.8292C75.7072 73.317 75.5121 73.7072 75.1218 73.9999C68.5852 78.6828 60.8779 81.5121 52.7804 81.9999C52.8779 81.9999 52.8779 81.9999 52.7804 81.9999ZM57.9511 54.878L61.1706 60.3414C61.3657 60.7316 61.4633 61.2194 61.2682 61.6097L54.9267 78.8779C61.2682 78.0975 67.4145 75.756 72.7803 71.9511V63.756C72.7803 58.5853 68.6828 54.5853 63.4145 54.4877C63.0243 54.4877 61.2682 54.4877 59.7072 53.7072C59.2194 54.0975 58.634 54.4877 57.9511 54.878Z" fill="currentColor"/>
					<path d="M37.073 42.4878C39.3169 48.3414 44.195 52.5366 49.951 52.5366C55.7071 52.5366 60.4876 48.3414 62.7315 42.4878C63.9023 42.878 65.4632 41.7073 66.2437 39.8536C67.0242 37.9024 66.7315 35.9512 65.5608 35.4634C65.073 35.1707 64.4876 35.3658 63.9998 35.561C63.6096 25.5122 57.6584 18 49.8535 18C42.0486 18 35.7072 25.7073 35.6096 35.4634C35.1218 35.1707 34.5364 35.1707 34.0486 35.3658C32.8779 35.8536 32.4876 37.8049 33.3657 39.7561C34.1462 41.7073 35.7072 42.878 37.073 42.4878ZM39.1218 31.1707C44.5852 32.8293 49.8535 29.5122 50.4389 29.1219C51.9023 30.5854 55.9998 33.8049 60.9754 34.0976V35.3658C60.9754 43.2683 55.9998 49.7073 49.7559 49.7073C43.512 49.7073 38.634 43.2683 38.634 35.3658C38.634 33.9024 38.7315 32.439 39.1218 31.1707Z" fill="currentColor"/>
					<path d="M53.4631 62.6829C54.3412 63.1707 55.4143 62.5853 55.4143 61.6097V58.1951C55.4143 57.1219 54.2436 56.5365 53.4631 57.1219L51.1217 58.5853C50.7314 58.1951 50.2436 57.9024 49.6582 57.9024C49.1704 57.9024 48.5851 58.1951 48.1948 58.5853L46.146 57.0243C45.268 56.5365 44.1948 57.1219 44.1948 58.0975V61.5121C44.1948 62.5853 45.3656 63.1707 46.146 62.5853L48.4875 61.1219C48.8777 61.5121 49.3656 61.8048 49.9509 61.8048C50.4387 61.8048 51.0241 61.5121 51.4143 61.1219L53.4631 62.6829Z" fill="currentColor"/>
					<path d="M51.1215 65.4146C51.1215 66.0975 50.5362 66.6829 49.8533 66.6829C49.1703 66.6829 48.585 66.0975 48.585 65.4146C48.585 64.7317 49.1703 64.1463 49.8533 64.1463C50.5362 64.1463 51.1215 64.7317 51.1215 65.4146Z" fill="currentColor"/>
					<path d="M51.1215 70.1951C51.1215 70.878 50.5362 71.4634 49.8533 71.4634C49.1703 71.4634 48.585 70.878 48.585 70.1951C48.585 69.5122 49.1703 68.9268 49.8533 68.9268C50.5362 68.9268 51.1215 69.5122 51.1215 70.1951Z" fill="currentColor"/>
					<path d="M51.1215 74.9756C51.1215 75.6586 50.5362 76.2439 49.8533 76.2439C49.1703 76.2439 48.585 75.6586 48.585 74.9756C48.585 74.2927 49.1703 73.7074 49.8533 73.7074C50.5362 73.6098 51.1215 74.1952 51.1215 74.9756Z" fill="currentColor"/>
				</svg>
				
				</div>
				<div class="sidebar-text">Careers</div>
			</a>
		`)

		b.push(`
			<div class="sidebar-social">
				<div class="sidebar-social__item">
					<a href="https://www.facebook.com/lukslofts2015/" target="_blank">
						<svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M85 50.5C85 31.4356 69.5644 16 50.5 16C31.4356 16 16 31.4356 16 50.5C16 67.7244 28.6244 81.9844 45.1333 84.5911V60.4667H36.3422V50.5H45.1333V42.8844C45.1333 34.2467 50.2444 29.4933 58.1156 29.4933C61.8978 29.4933 65.8333 30.1578 65.8333 30.1578V38.6422H61.4889C57.1956 38.6422 55.8667 41.3 55.8667 44.0089V50.5H65.4244L63.8911 60.4667H55.8667V84.5911C72.3756 81.9844 85 67.7244 85 50.5Z" fill="currentColor"/>
							<path d="M63.9423 60.4667L65.4756 50.5H55.8667V44.0089C55.8667 41.3 57.1956 38.6422 61.4889 38.6422H65.8334V30.1578C65.8334 30.1578 61.8978 29.4933 58.1156 29.4933C50.2445 29.4933 45.1334 34.2467 45.1334 42.8845V50.5H36.3423V60.4667H45.1334V84.5911C46.8712 84.8467 48.7112 85 50.5001 85C52.3401 85 54.1289 84.8467 55.8667 84.5911V60.4667H63.9423Z" fill="white"/>
						</svg>
					</a>
				</div>

				<div class="sidebar-social__item">
					<a href="https://www.instagram.com/luksloftphilippines/" target="_blank">
						<svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M49.5 85C68.5538 85 84 69.5538 84 50.5C84 31.4462 68.5538 16 49.5 16C30.4462 16 15 31.4462 15 50.5C15 69.5538 30.4462 85 49.5 85Z" fill="currentColor"/>
							<path d="M49.5001 32.7133C55.2756 32.7133 55.9912 32.7133 58.2912 32.8155C60.3867 32.9178 61.5623 33.2755 62.3289 33.5822C63.3512 33.9911 64.0667 34.4511 64.8334 35.2178C65.6001 35.9844 66.0601 36.7 66.4689 37.7222C66.7756 38.4889 67.1334 39.6133 67.2356 41.76C67.3378 44.06 67.3378 44.7244 67.3378 50.5511C67.3378 56.3778 67.3378 57.0422 67.2356 59.3422C67.1334 61.4378 66.7756 62.6133 66.4689 63.38C66.0601 64.4022 65.6001 65.1178 64.8334 65.8844C64.0667 66.6511 63.3512 67.1111 62.3289 67.52C61.5623 67.8267 60.4378 68.1844 58.2912 68.2867C55.9912 68.3889 55.3267 68.3889 49.5001 68.3889C43.7245 68.3889 43.0089 68.3889 40.7089 68.2867C38.6134 68.1844 37.4378 67.8267 36.6712 67.52C35.6489 67.1111 34.9334 66.6511 34.1667 65.8844C33.4001 65.1178 32.9401 64.4022 32.5312 63.38C32.2245 62.6133 31.8667 61.4889 31.7645 59.3422C31.6623 57.0422 31.6623 56.3778 31.6623 50.5511C31.6623 44.7244 31.6623 44.06 31.7645 41.76C31.8667 39.6644 32.2245 38.4889 32.5312 37.7222C32.9401 36.7 33.4001 35.9844 34.1667 35.2178C34.9334 34.4511 35.6489 33.9911 36.6712 33.5822C37.4378 33.2755 38.5623 32.9178 40.7089 32.8155C43.0089 32.7133 43.7245 32.7133 49.5001 32.7133ZM49.5001 28.7778C43.6223 28.7778 42.8556 28.7778 40.5556 28.9311C38.2556 29.0333 36.6712 29.3911 35.2912 29.9533C33.8601 30.5155 32.6334 31.2311 31.4578 32.4578C30.2312 33.6844 29.5156 34.86 28.9534 36.2911C28.3912 37.6711 28.0334 39.2555 27.9312 41.5555C27.7778 43.8555 27.7778 44.6222 27.7778 50.5C27.7778 56.3778 27.7778 57.1444 27.9312 59.4444C28.0334 61.7444 28.3912 63.3289 28.9534 64.7089C29.5156 66.14 30.2312 67.3667 31.4578 68.5422C32.6845 69.7689 33.8601 70.4844 35.2912 71.0467C36.6712 71.6089 38.2556 71.9667 40.5556 72.0689C42.8556 72.1711 43.6223 72.2222 49.5001 72.2222C55.3778 72.2222 56.1445 72.2222 58.4445 72.0689C60.7445 71.9667 62.3289 71.6089 63.7089 71.0467C65.1401 70.4844 66.3667 69.7689 67.5423 68.5422C68.7689 67.3155 69.4845 66.14 70.0467 64.7089C70.6089 63.3289 70.9667 61.7444 71.0689 59.4444C71.1712 57.1444 71.2223 56.3778 71.2223 50.5C71.2223 44.6222 71.2223 43.8555 71.0689 41.5555C70.9667 39.2555 70.6089 37.6711 70.0467 36.2911C69.4845 34.86 68.7689 33.6333 67.5423 32.4578C66.3156 31.2311 65.1401 30.5155 63.7089 29.9533C62.3289 29.3911 60.7445 29.0333 58.4445 28.9311C56.1445 28.7778 55.3778 28.7778 49.5001 28.7778Z" fill="white"/>
							<path d="M49.5001 39.3578C43.3157 39.3578 38.3579 44.3666 38.3579 50.5C38.3579 56.6333 43.3668 61.6422 49.5001 61.6422C55.6846 61.6422 60.6424 56.6333 60.6424 50.5C60.6424 44.3666 55.6846 39.3578 49.5001 39.3578ZM49.5001 57.7578C45.5135 57.7578 42.2424 54.5378 42.2424 50.5C42.2424 46.4622 45.4624 43.2422 49.5001 43.2422C53.5379 43.2422 56.7579 46.4622 56.7579 50.5C56.7579 54.5378 53.4868 57.7578 49.5001 57.7578Z" fill="white"/>
							<path d="M61.1023 41.5044C62.5419 41.5044 63.7089 40.3374 63.7089 38.8978C63.7089 37.4582 62.5419 36.2911 61.1023 36.2911C59.6626 36.2911 58.4956 37.4582 58.4956 38.8978C58.4956 40.3374 59.6626 41.5044 61.1023 41.5044Z" fill="white"/>
						</svg>
					</a>
				</div>

				<div class="sidebar-social__item">
					<a href="https://twitter.com/LuksLoft" target="_blank">
						<svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M50.5 85C69.5538 85 85 69.5538 85 50.5C85 31.4462 69.5538 16 50.5 16C31.4462 16 16 31.4462 16 50.5C16 69.5538 31.4462 85 50.5 85Z" fill="currentColor"/>
							<path d="M43.5487 70.3822C60.4154 70.3822 69.6154 56.4289 69.6154 44.3155C69.6154 43.9067 69.6154 43.5489 69.5643 43.14C71.3532 41.8622 72.8865 40.2267 74.1132 38.3867C72.4776 39.1022 70.6887 39.6133 68.8487 39.8178C70.7398 38.6933 72.1709 36.9044 72.8865 34.7578C71.0976 35.8311 69.1554 36.5467 67.0598 37.0067C65.3732 35.2178 63.0221 34.0933 60.3643 34.0933C55.3043 34.0933 51.2154 38.1822 51.2154 43.2422C51.2154 43.9578 51.3176 44.6733 51.4709 45.3378C43.8554 44.98 37.1087 41.3 32.6109 35.78C31.8443 37.1089 31.3843 38.6933 31.3843 40.38C31.3843 43.5489 33.0198 46.36 35.4732 47.9955C33.9909 47.9444 32.5598 47.5355 31.3332 46.8711C31.3332 46.9222 31.3332 46.9222 31.3332 46.9733C31.3332 51.42 34.5021 55.1 38.6932 55.9689C37.9265 56.1733 37.1087 56.2755 36.2909 56.2755C35.6776 56.2755 35.1154 56.2244 34.5532 56.1222C35.7287 59.7511 39.1021 62.4089 43.0887 62.46C39.9709 64.9133 35.9843 66.3955 31.6909 66.3955C30.9754 66.3955 30.2087 66.3444 29.4932 66.2933C33.5309 68.8489 38.3354 70.3822 43.5487 70.3822Z" fill="white"/>
						</svg>
					</a>
				</div>
			</div>
		`);

		b.push(`
			<div class="sidebar-footer">
				<div class="sidebar-footer__details">
					<a href="tel:+63433021000">+63.43.302.1000</a>
				</div>
				<div class="sidebar-footer__details">
					<a href="mailto:reservations@lukslofts.com">reservations@lukslofts.com</a>
				</div>
				<div class="sidebar-footer__details">
					<a href="about/.html">Batangas City, Philippines</a>
				</div>
			</div>
		`);

		return b.join('');
	};

	/*	Panel-ify an element:
		@param {object} userConfig User config.
		@return {jQuery} jQuery object.
	*/
	$.fn.panel = function(userConfig) {

		// No elements?
		if (this.length == 0) return $this;

		// Multiple elements?
		if (this.length > 1) {
			for (var i=0; i < this.length; i++)
			$(this[i]).panel(userConfig);
			return $this;
		}

		// Vars.
		var	$this = $(this),
			$body = $('body'),
			$window = $(window),
			id = $this.attr('id'),
			config;

		// Config.
		config = $.extend({
			// Delay.
			delay: 0,

			// Hide panel on link click.
			hideOnClick: false,

			// Hide panel on escape keypress.
			hideOnEscape: false,

			// Hide panel on swipe.
			hideOnSwipe: false,

			// Reset scroll position on hide.
			resetScroll: false,

			// Reset forms on hide.
			resetForms: false,

			// Side of viewport the panel will appear.
			side: null,

			// Target element for "class".
			target: $this,

			// Class to toggle.
			visibleClass: 'visible'
		}, userConfig);

		// Expand "target" if it's not a jQuery object already.
		if (typeof config.target != 'jQuery') config.target = $(config.target);

		// Panel.
		// Methods.
		$this._hide = function(event) {
			// Already hidden? Bail.
			if (!config.target.hasClass(config.visibleClass)) return;

			// If an event was provided, cancel it.
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			// Hide.
			config.target.removeClass(config.visibleClass);

			// Post-hide stuff.
			window.setTimeout(function() {
				// Reset scroll position.
					if (config.resetScroll)
						$this.scrollTop(0);

				// Reset forms.
				if (config.resetForms)
					$this.find('form').each(function() {
					this.reset();
				});
			}, config.delay);
		};

		// Vendor fixes.
		$this.css('-ms-overflow-style', '-ms-autohiding-scrollbar').css('-webkit-overflow-scrolling', 'touch');

		// Hide on click.
		if (config.hideOnClick) {

			$this.find('a').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

			$this.on('click', 'a', function(event) {
				var $a = $(this),
					href = $a.attr('href'),
					target = $a.attr('target');

				if (!href || href == '#' || href == '' || href == '#' + id) return;

				// Cancel original event.
				event.preventDefault();
				event.stopPropagation();

				// Hide panel.
				$this._hide();

				// Redirect to href.
				window.setTimeout(function() {
					if (target == '_blank') window.open(href);
					else window.location.href = href;
				}, config.delay + 10);
			});
		}

		// Event: Touch stuff.
		$this.on('touchstart', function(event) {
			$this.touchPosX = event.originalEvent.touches[0].pageX;
			$this.touchPosY = event.originalEvent.touches[0].pageY;
		})
		
		$this.on('touchmove', function(event) {
			if ($this.touchPosX === null ||	$this.touchPosY === null) return;

			var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
				diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
				th = $this.outerHeight(),
				ts = ($this.get(0).scrollHeight - $this.scrollTop());

			// Hide on swipe?
			if (config.hideOnSwipe) {
				var result = false,
					boundary = 20,
					delta = 50;

				switch (config.side) {
					case 'left':
						result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
						break;

					case 'right':
						result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
						break;

					case 'top':
						result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
						break;

					case 'bottom':
						result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
						break;

					default:
						break;
				}

				if (result) {
					$this.touchPosX = null;
					$this.touchPosY = null;
					$this._hide();
					return false;
				}
			}

			// Prevent vertical scrolling past the top or bottom.
			if (($this.scrollTop() < 0 && diffY < 0) || (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {
				event.preventDefault();
				event.stopPropagation();
			}
		});

		// Event: Prevent certain events inside the panel from bubbling.
		$this.on('click touchend touchstart touchmove', function(event) {
			event.stopPropagation();
		});

		// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
		$this.on('click', 'a[href="#' + id + '"]', function(event) {
			event.preventDefault();
			event.stopPropagation();
			config.target.removeClass(config.visibleClass);
		});

		// Body.

		// Event: Hide panel on body click/tap.
		$body.on('click touchend', function(event) {
			$this._hide(event);
		});

		// Event: Toggle.
		$body.on('click', 'a[href="#' + id + '"]', function(event) {
			event.preventDefault();
			event.stopPropagation();

			config.target.toggleClass(config.visibleClass);
		});

		// Window.

		// Event: Hide on ESC.
		if (config.hideOnEscape)
		$window.on('keydown', function(event) {
			if (event.keyCode == 27) $this._hide(event);
		});

		return $this;
	};

	
	// Apply "placeholder" attribute polyfill to one or more forms.
	// @return {jQuery} jQuery object.
	$.fn.placeholder = function() {
		// Browser natively supports placeholders? Bail.
		if (typeof (document.createElement('input')).placeholder != 'undefined') return $(this);

		// No elements?
		if (this.length == 0) return $this;

		// Multiple elements?
		if (this.length > 1) {
			for (var i=0; i < this.length; i++)
				$(this[i]).placeholder();
			return $this;
		}

		// Vars.
		var $this = $(this);

		// Text, TextArea.
		$this.find('input[type=text],textarea').each(function() {
			var i = $(this);

			if (i.val() == '' ||  i.val() == i.attr('placeholder'))
				i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
		}).on('blur', function() {
			var i = $(this);

			if (i.attr('name').match(/-polyfill-field$/)) return;

			if (i.val() == '')
				i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
		}).on('focus', function() {
			var i = $(this);

			if (i.attr('name').match(/-polyfill-field$/)) return;

			if (i.val() == i.attr('placeholder'))
				i.removeClass('polyfill-placeholder').val('');
		});

		// Password.
		$this.find('input[type=password]').each(function() {
			var i = $(this);
			var x = $(
				$('<div>')
					.append(i.clone())
					.remove()
					.html()
					.replace(/type="password"/i, 'type="text"')
					.replace(/type=password/i, 'type=text')
			);

			if (i.attr('id') != '')
				x.attr('id', i.attr('id') + '-polyfill-field');

			if (i.attr('name') != '')
				x.attr('name', i.attr('name') + '-polyfill-field');

			x.addClass('polyfill-placeholder')
				.val(x.attr('placeholder')).insertAfter(i);

			if (i.val() == '')
				i.hide();
			else
				x.hide();

			i.on('blur', function(event) {
				event.preventDefault();
				var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');
				if (i.val() == '') {
						i.hide();
						x.show();
					}
			});

			x.on('focus', function(event) {
				event.preventDefault();
				var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');
				i.show().focus();
				x.hide();
			}).on('keypress', function(event) {
				event.preventDefault();
				x.val('');
			});
		});

		// Events.
		$this.on('submit', function() {
			$this.find('input[type=text],input[type=password],textarea').each(function(event) {
				var i = $(this);

				if (i.attr('name').match(/-polyfill-field$/))
					i.attr('name', '');

				if (i.val() == i.attr('placeholder')) {
					i.removeClass('polyfill-placeholder');
					i.val('');
				}
			});

		}).on('reset', function(event) {
			event.preventDefault();

			$this.find('select').val($('option:first').val());

			$this.find('input,textarea').each(function() {
				var i = $(this),
					x;

				i.removeClass('polyfill-placeholder');
				switch (this.type) {
					case 'submit':

					case 'reset':
						break;

					case 'password':
						i.val(i.attr('defaultValue'));
						x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

						if (i.val() == '') {
							i.hide();
							x.show();
						}
						else {
							i.show();
							x.hide();
						}

						break;

					case 'checkbox':

					case 'radio':
						i.attr('checked', i.attr('defaultValue'));
						break;

					case 'text':

					case 'textarea':
						i.val(i.attr('defaultValue'));

						if (i.val() == '') {
							i.addClass('polyfill-placeholder');
							i.val(i.attr('placeholder'));
						}
						
						break;

						default:
							i.val(i.attr('defaultValue'));
							break;
				}
			});
		});

		return $this;
	};

	// Moves elements to/from the first positions of their respective parents.
	// @param {jQuery} $elements Elements (or selector) to move.
	// @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
	$.prioritize = function($elements, condition) {
		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
		if (typeof $elements != 'jQuery') $elements = $($elements);

		// Step through elements.
		$elements.each(function() {
			var	$e = $(this), $p,
				$parent = $e.parent();

			// No parent? Bail.
			if ($parent.length == 0) return;

			// Not moved? Move it.
			if (!$e.data(key)) {
				// Condition is false? Bail.
				if (!condition) return;

				// Get placeholder (which will serve as our point of reference for when this element needs to move back).
				$p = $e.prev();

				// Couldn't find anything? Means this element's already at the top, so bail.
				if ($p.length == 0) return;

				// Move element to top of parent.
				$e.prependTo($parent);

				// Mark element as moved.
				$e.data(key, $p);
			}
			// Moved already?
			else {
				// Condition is true? Bail.
				if (condition) return;

				$p = $e.data(key);

				// Move element back to its original location (using our placeholder).
				$e.insertAfter($p);

				// Unmark element as moved.
				$e.removeData(key);
			}
		});
	};
 
	// Generate Top Banner components globally
	$.fn.topBanner = function() {
		topBannerElements = [];

		topBannerElements.push(`
			<div class="banner__left">
				<div class="banner__skip">
					Skip Content
				</div>
			</div>
			<div class="banner__center">
				<div class="banner__content">Luxuriously Safe during COVID-19:</div>
				<div class="banner__content">
					<a href="rates">
						<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M74.1111 22.6H70.6667V15.625H63.7778V22.6H36.2222V15.625H29.3333V22.6H25.8889C22.1 22.6 19 25.7387 19 29.575V78.4C19 82.2363 22.1 85.375 25.8889 85.375H74.1111C77.9 85.375 81 82.2363 81 78.4V29.575C81 25.7387 77.9 22.6 74.1111 22.6ZM74.1111 78.4H25.8889V43.525H74.1111V78.4ZM74.1111 36.55H25.8889V29.575H74.1111V36.55ZM39.6667 57.475H32.7778V50.5H39.6667V57.475ZM53.4444 57.475H46.5556V50.5H53.4444V57.475ZM67.2222 57.475H60.3333V50.5H67.2222V57.475ZM39.6667 71.425H32.7778V64.45H39.6667V71.425ZM53.4444 71.425H46.5556V64.45H53.4444V71.425ZM67.2222 71.425H60.3333V64.45H67.2222V71.425Z" fill="currentColor"/>
						</svg>							
						<span>Best Rates</span>
					</a>
				</div>
				<div class="banner__content">
					<a href="commitment">
						<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.1562 53.5H36.25V43H45.1562V34.25H55.8438V43H64.75V53.5H55.8438V62.25H45.1562V53.5ZM50.5 15L22 25.5V46.85C22 64.35 34.1125 81.15 50.5 85C66.8875 81.15 79 64.35 79 46.85V25.5L50.5 15ZM71.875 46.85C71.875 60.85 62.6125 73.8 50.5 77.65C38.3875 73.8 29.125 60.85 29.125 46.85V30.4L50.5 22.35L71.875 30.4V46.85Z" fill="currentColor"/>
						</svg>							
						<span>Commitment to Safety</span>
					</a>
				</div>
				<div class="banner__content">
					<a href="contactless">
						<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M69.2941 37.0909L82 49.7143L69.2941 62.3377L64.8471 57.9195L69.9294 52.8701H53.4118V46.5584H69.9294L64.8471 41.5091L69.2941 37.0909ZM34.3529 15H66.1176C69.6118 15 72.4706 17.8403 72.4706 21.3117V33.9351H66.1176V30.7792H34.3529V68.6493H66.1176V65.4935H72.4706V78.1169C72.4706 81.5883 69.6118 84.4286 66.1176 84.4286H34.3529C30.8588 84.4286 28 81.5883 28 78.1169V21.3117C28 17.8403 30.8588 15 34.3529 15ZM34.3529 78.1169H66.1176V74.961H34.3529V78.1169ZM34.3529 24.4675H66.1176V21.3117H34.3529V24.4675Z" fill="currentColor"/>
						</svg>							
						<span>Contactless Service</span>
					</a>
				</div>
			</div>
			<div class="banner__right">
				<div class="banner__close">
					<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M79.1673 26.708L73.2923 20.833L50.0007 44.1247L26.709 20.833L20.834 26.708L44.1257 49.9997L20.834 73.2913L26.709 79.1663L50.0007 55.8747L73.2923 79.1663L79.1673 73.2913L55.8757 49.9997L79.1673 26.708Z" fill="currentColor"/>
					</svg>
				</div>
			</div>
		`)

		return topBannerElements.join('');
		
	}

	// Generate Banner Sidenav Components
	$.fn.bannerSidenav = function() {
		sidenavs = [];

		

		// sidenavs.push(`
		// 	<div id="staycationSidenav" class="sidenav sidenav--right banner-sidenav">
		// 		<div class="sidenav-inner">
		// 			<a class="lukslofts-btn secondary-btn light-sec close-sidenav" onClick="sidenavClose()">Close</a>
					
		// 			<div class="facilities-content__header">
		// 				<h1 class="luks-heading">STAYCATION</h1>
		// 				<h4 class="luks-hash">#LuxuriousLiving</h4>
		// 			</div>

		// 			<div class="facilities-content__body">
		// 				<div class="facilities-item">
		// 					<div class="facilities-item__icon">
		// 						<img src="2022/icons/banner/01.svg" alt="no booking icon">
		// 					</div>
		// 					<div class="facilities-item__text">No Booking Fees</div>
		// 				</div>
		// 				<div class="facilities-item">
		// 					<div class="facilities-item__icon">
		// 						<img src="2022/icons/banner/02.svg" alt="secure booking">
		// 					</div>
		// 					<div class="facilities-item__text">Secure Booking</div>
		// 				</div>
		// 				<div class="facilities-item">
		// 					<div class="facilities-item__icon">
		// 						<img src="2022/icons/banner/03.svg" alt="complimentary wi-fi">
		// 					</div>
		// 					<div class="facilities-item__text">Complimentary Wi-Fi</div>
		// 				</div>
		// 				<div class="facilities-item">
		// 					<div class="facilities-item__icon">
		// 						<img src="2022/icons/banner/04.svg" alt="best rate guaranteed">
		// 					</div>
		// 					<div class="facilities-item__text">Best Rate Guaranteed</div>
		// 				</div>
		// 			</div>

		// 			<div class="loft-content__text-cta">
		// 				<a class="lukslofts-btn primary-btn rounded-btn" onclick="sethotelier()">Book Now</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// `)

		// sidenavs.push(`
		// 	<div id="serviceSidenav" class="sidenav sidenav--right banner-sidenav">
		// 		<div class="sidenav-inner">
		// 			<a class="lukslofts-btn secondary-btn light-sec close-sidenav" onClick="sidenavClose()">Close</a>
					
		// 			<div class="facilities-content__header">
		// 				<h1 class="luks-heading">Contactless Service</h1>
		// 				<h4 class="luks-hash">#LuxuriouslySafe</h4>
		// 			</div>

		// 			<div class="facilities-content__body">
		// 				<p class="luks-lead">Upon check-in, our Digital Butler will greet you through a Luks Device sanitized, assigned, and personalized for you.</p>
		// 				<p class="luks-lead">Access our e-menu, mobile payment options, and other services through our Digital Butler to limit person-to-person contact.</p>
		// 				<p class="luks-lead">We understand that you might be more comfortable using your own device. You may choose to turn your smartphones into Luks Devices for a more relaxing room control option.</p>
		// 			</div>

		// 			<div class="standard-icons">
		// 				<div class="standard-icons__img standard-icons__img--fsa">
		// 					<img src="2022/icons/seal-safety--filled.svg" alt="">
		// 				</div>
		// 				<div class="standard-icons__img standard-icons__img--lg">
		// 					<img src="2022/icons/seal-dot.svg" alt="">
		// 				</div>
		// 			</div>

		// 			<div class="loft-content__text-cta">
		// 				<a class="lukslofts-btn primary-btn rounded-btn" onclick="sethotelier()">Book Now</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// `)

		return sidenavs.join('');
	};

})(jQuery);
