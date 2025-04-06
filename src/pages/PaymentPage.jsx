import React from 'react'

const PaymentPage = () => {
	return (
		<div className='min-h-screen pt-20'>
			<section className='bg-white py-8 antialiased  md:py-16'>
				<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
					<div className='mx-auto max-w-5xl'>
						<h2 className='text-xl font-semibold text-gray-900  sm:text-2xl'>
							To‘lov
						</h2>
						<div className='mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12'>
							<form
								action='#'
								className='w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6 lg:max-w-xl lg:p-8'
							>
								<div className='mb-6 grid grid-cols-1 gap-4'>
									<div className='col-span-2 sm:col-span-1'>
										<label
											htmlFor='full_name'
											className='mb-2 block text-sm font-medium text-gray-900 '
										>
											{' '}
											Kartadagi to‘liq ism-sharif*{' '}
										</label>
										<input
											type='text'
											id='full_name'
											className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500'
											placeholder='Shokhruz Isroilov'
											required=''
										/>
									</div>
									<div className='col-span-2 sm:col-span-1'>
										<label
											htmlFor='card-number-input'
											className='mb-2 block text-sm font-medium text-gray-900 '
										>
											{' '}
											Karta raqami*{' '}
										</label>
										<input
											type='text'
											id='card-number-input'
											className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500'
											placeholder='xxxx-xxxx-xxxx-xxxx'
											pattern='^4[0-9]{12}(?:[0-9]{3})?$'
											required=''
										/>
									</div>
									<div>
										<label
											htmlFor='card-expiration-input'
											className='mb-2 block text-sm font-medium text-gray-900 '
										>
											Kartaning amal qilish muddati*{' '}
										</label>
										<div className='relative'>
											<div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5'>
												<svg
													className='h-4 w-4 text-gray-500 '
													aria-hidden='true'
													xmlns='http://www.w3.org/2000/svg'
													width={24}
													height={24}
													fill='currentColor'
													viewBox='0 0 24 24'
												>
													<path
														fillRule='evenodd'
														d='M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<input
												datepicker=''
												datepicker-format='mm/yy'
												id='card-expiration-input'
												type='text'
												className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900  '
												placeholder='12/23'
												required=''
											/>
										</div>
									</div>
								</div>
								<button
									type='submit'
									className='flex w-full items-center justify-center rounded-lg bg-orange-300 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-4  focus:bg-orange-300 '
								>
									To‘lovni amalga oshirish
								</button>
							</form>
							<div className='mt-6 grow sm:mt-8 lg:mt-0'>
								<div className='space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6'>
									<div className='space-y-2'>
										<dl className='flex items-center justify-between gap-4'>
											<dt className='text-base font-normal text-gray-500 '>
												Asl narx:
											</dt>
											<dd className='text-base font-medium text-gray-900 '>
												{`300 000 so'm`}
											</dd>
										</dl>
										<dl className='flex items-center justify-between gap-4'>
											<dt className='text-base font-normal text-gray-500 '>
												Chegirma:
											</dt>
											<dd className='text-base font-medium text-green-500'>
												{`-50 000 so'm`}
											</dd>
										</dl>
										<dl className='flex items-center justify-between gap-4'>
											<dt className='text-base font-normal text-gray-500 '>
												Do‘kondan yetkazib berish (xizmat haqi):
											</dt>
											<dd className='text-base font-medium text-gray-900 '>
												{`30 000 so'm`}
											</dd>
										</dl>
									</div>
									<dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 '>
										<dt className='text-base font-bold text-gray-900'>
											Umumiy:
										</dt>
										<dd className='text-base font-bold text-gray-900 '>
											{`250 000 so'm`}
										</dd>
									</dl>
								</div>
								<div className=' flex items-center justify-center gap-2'>
									<img
										className='hidden h-6 w-auto dark:flex'
										src='https://www.fibernet.uz/wp-content/uploads/payme-logo.png'
										alt=''
									/>
									<img
										className='hidden h-36 w-auto dark:flex'
										src='https://api.logobank.uz/media/logos_png/Click-01_hjB080W.png'
										alt=''
									/>

									<img
										className='hidden h-8 w-auto dark:flex'
										src='https://humocard.uz/upload/iblock/241/ltnphls3bex077ar4ihj8bpxare6o09t/uzum.png'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PaymentPage
