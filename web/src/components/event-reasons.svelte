<script lang="ts">
	import ExpandedCard from './expanded-card.svelte';
</script>

<div class="text-center items-center text-sm">
	<div class="grid gap-[16px] md:gap-[32px]">
		<h1 class="heading-responsive-03">ทำไมต้องลงชื่อ</h1>
		<img
			class="m-auto mt-[16px] mt-[16px]"
			src="/vote-box.svg"
			alt="vote-box"
		/>
		<div>
			<p>
				วาระแรกหลังการจัดตั้งคณะรัฐมนตรี
				คือการทำประชามติเพื่อจัดทำรัฐธรรมนูญฉบับใหม่ ซึ่ง<span class="font-bold"
					>คำถามประชามติ</span
				> จะมีผลผูกพันในการกำหนดว่า กระบวนการแก้ไขรัฐธรรมนูญ จะออกมามีหน้าตาอย่างไร
			</p>
			<br />
			<p>
				เพื่อให้มั่นใจว่ารัฐธรรมนูญฉบับใหม่ จะเป็นของประชาชนโดยแท้จริง
				จะต้องมั่นใจได้ว่า <span class="font-bold"
					>"รัฐธรรมนูญ ต้องเขียนใหม่ทั้งฉบับ และ สสร. ต้องเลือกตั้ง 100%"</span
				>
			</p>
			<br />
			<p>
				ตามกลไก พ.ร.บ. ประชามติ 2564 เราต้องการอย่างน้อย 50,000 ชื่อ
				เพื่อส่งให้คณะรัฐมนตรีอนุมัติทำประชามติโดยใช้ <span class="font-bold"
					>“คำถามที่ประชาชนกำหนดเอง”</span
				> ทันทีที่จัดตั้งรัฐบาลใหม่สำเร็จ
			</p>
			<br />
			<a
				class="text-decoration-line: underline text-[-webkit-link]"
				target="_blank"
				href="https://ilaw.or.th/node/6612">รายละเอียดเพิ่มเติม</a
			>
		</div>
	</div>
	<div class="w-full border-t border-secondary my-[32px]" />
	<div class="grid gap-[16px]">
		<h2
			class="heading-responsive-01 md:text-[36px] md:leading-[36px] text-left md:text-center"
		>
			คำถามที่เราเสนอ
		</h2>
		<div class="bg-[url('/paper-bg.svg')] bg-cover p-[24px] md:p-[32px]">
			<p class="heading-responsive-02 text-primary">
				ท่านเห็นชอบหรือไม่ ว่ารัฐสภาต้องแก้ไขรัฐธรรมนูญ พ.ศ. 2560
				เพื่อจัดทำรัฐธรรมนูญใหม่<span class="text-accent">ทั้งฉบับ</span>
				โดยสมาชิกสภาร่างรัฐธรรมนูญ (สสร.) ที่มาจากการ<span class="text-accent"
					>เลือกตั้ง</span
				>ของประชาชน
			</p>
		</div>
		<div>
			<p class="text-left font-minimal">ประเด็นสำคัญ</p>
			<div class="flex flex-col md:flex-row mt-[4px]">
				<div>
					<ExpandedCard
						header1="รัฐธรรมนูญ"
						header2="เขียนใหม่ทั้งฉบับ"
						tabindex={1}
					>
						<div>
							<p>
								รัฐธรรมนูญ 2560 มีที่มาจากระบอบคสช.
								ซึ่งแต่งตั้งคนของตัวเองขึ้นมายกร่าง
								และมีหลายกลไกที่วางไว้เพื่อสืบทอดอำนาจให้กับคณะรัฐประหาร
								การยกเลิกรัฐธรรมนูญ 2560 “ทั้งหมด” และเริ่มต้นกระบวนการจัดทำใหม่
								“ทั้งฉบับ” เป็นเรื่องที่จำเป็น
							</p>
							<br />
							<p>
								หากการเขียนรัฐธรรมนูญใหม่
								เปิดช่องให้กำหนดเงื่อนไขบางอย่างได้ว่าให้เขียนใหม่เฉพาะบางเรื่อง
								และต้องคงไว้บางเรื่อง ไม่เท่ากับการ “เขียนรัฐธรรมนูญใหม่”
								โดยแท้จริง
								แต่กลายเป็นเปิดช่องคงไว้ซึ่งอำนาจบางประการที่มีที่มาไม่ชอบธรรมได้
							</p>
						</div>
					</ExpandedCard>
				</div>
				<div class="mt-[4px] md:ml-[4px] md:mt-[0px]">
					<ExpandedCard header1="สสร." header2="เลือกตั้ง 100%" tabindex={2}>
						<div>
							<p>
								ความฝันที่จะมีรัฐธรรมนูญฉบับใหม่
								เป็นกติกากลางใช้ร่วมกันซึ่งเป็นที่ยอมรับ
								สามารถวางรากฐานการเมืองให้กับประเทศไทย
								ต้องเริ่มจากกระบวนการที่ชอบธรรม
								ประชาชนได้มีส่วนร่วมและตัดสินใจทุกส่วน
							</p>
							<br />
							<p>
								สสร. ผู้ที่จะมายกร่างจึงต้องมาจากการเลือกตั้งของประชาชน
								เป็นตัวแทนและมีความรับผิดชอบผูกพันกับประชาชนผู้ออกเสียง
								หากมีคนที่มาจากกระบวนการอื่น หรือมีนักเทคนิค นักวิชาการ
								อาจเกิดการครอบงำผู้ยกร่าง
								หรือทำให้จำนวนเสียงตอนลงมติเปลี่ยนแปลงไปได้มาก
							</p>
						</div>
					</ExpandedCard>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full border-t border-secondary my-[32px]" />

	<div class="grid gap-[24px]">
		<h2
			class="heading-responsive-01 md:text-[36px] md:leading-[36px] text-left md:text-center"
		>
			ทำไมต้องรีบให้ได้ครบ 50,000 ชื่อ
		</h2>
		<div>
			<img class="m-auto mw-[288px]" src="/timeline.svg" alt="timeline" />
		</div>
		<div>
			<p>
				เนื่องจากแกนนำจัดตั้งรัฐบาลอย่างพรรคเพื่อไทย
				และพรรคภูมิใจไทยออกแถลงการณ์ร่วมกันว่า
				จะจัดให้มีการทำประชามติเพื่อการเขียนรัฐธรรมนูญใหม่โดยเร็วตั้งแต่การประชุมคณะรัฐมนตรีนัดแรก
			</p>
			<br />
			<p>
				หากสามารถเลือกนายกรัฐมนตรีได้ในวันที่ <span class="font-bold"
					>22 สิงหาคม 2566</span
				>
				ก็คาดหมายว่าจะจัดตั้งคณะรัฐมนตรีและเริ่มประชุมได้ราว 2 สัปดาห์หลังจากนั้นหรือประมาณวันที่
				<span class="font-bold">5-10 กันยายน 2566</span> ถ้าหากเป็นไปตามกำหนดการนี้
				ภายในวันที่ 5-10 กันยายน 2566 คณะรัฐมนตรีชุดใหม่ที่มาจากการผสมหลายพรรคหลายขั้วการเมืองก็อาจ
				“เคาะ” ตัดสินใจเรื่องคำถามไปเลยและไม่ย้อนกลับมาพิจารณาอีก
			</p>
			<br />
			<p class="font-bold">
				เราจึงต้องรวบรวมรายชื่อและเสนอเรื่องนี้ให้ได้ก่อนการประชุมคณะรัฐมนตรีนัดแรก
			</p>
		</div>
	</div>
</div>
