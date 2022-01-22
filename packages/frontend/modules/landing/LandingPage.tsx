/* eslint-disable react/button-has-type */
import {Button} from '@components/Button';
import {Icon} from '@components/Icon';
import {useCountMediaQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';
import {AiOutlineCustomerService, AiOutlineDesktop, AiOutlineRead, AiOutlineVideoCamera} from 'react-icons/ai';

export const LandingPage: React.FC = () => {
	const {data} = useCountMediaQuery();

	return (
		<>
			<section
				className="xl:bg-contain bg-top bg-no-repeat"
				style={{backgroundImage: 'url("metis-assets/backgrounds/intersect.svg")'}}
			>
				<div className="container px-4 mx-auto">
					<nav className="flex justify-between items-center py-6">
						<a className="text-3xl font-semibold leading-none" href="#">
							swoosh
						</a>
						<div className="lg:hidden">
							<button className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
								<svg
									className="fill-current h-4 w-4"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Mobile menu</title>
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
								</svg>
							</button>
						</div>
						<ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
							<li>
								<a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">
									Testimonials
								</a>
							</li>
							<li>
								<a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">
									Blog
								</a>
							</li>
							<li>
								<a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">
									FAQ
								</a>
							</li>
							<li>
								<a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">
									Contact
								</a>
							</li>
						</ul>
						<div className="hidden lg:block">
							<Link href="/login">
								<Button variant="tertiary" className="mr-2">
									Log In
								</Button>
							</Link>
							<Link href="/register">
								<a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded">
									Sign Up
								</a>
							</Link>
						</div>
					</nav>
					<div className="py-12 text-center">
						<div className="max-w-lg mx-auto mb-8">
							<h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
								<span>The one and</span>
								<span className="text-blue-600 line-through mx-2">only</span>
								<span>internet movie databse.</span>
							</h2>
							<p className="text-blueGray-400 leading-relaxed">
								we'll help you find and store exactly what you're looking for.
							</p>
						</div>
						<div>
							<a
								className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
								href="#"
							>
								Get Started
							</a>
							<a
								className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-blueGray-100 rounded"
								href="#"
							>
								Already a Member?
							</a>
						</div>
					</div>
					<div className="relative max-w-3xl mt-6 mb-8 mx-auto">
						<img src="pattern-small.png" alt="" />
						<div className="absolute" style={{top: '3%', left: '9%', width: '82%', height: '90%'}}>
							<img className="object-contain w-full h-full" src="app-mockup.png" alt="" />
						</div>
					</div>
					<div className="flex flex-wrap justify-between pt-8 pb-16">
						<div className="flex w-1/2 lg:w-auto py-4">
							<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
								<Icon icon={AiOutlineVideoCamera} className="w-6 h-6" />
							</div>
							<div className="sm:py-2 ml-2 sm:ml-6">
								<span className="sm:text-2xl font-bold font-heading">
									{data?.aggregateMovie._count?._all}
								</span>
								<p className="text-xs sm:text-base text-blueGray-400">Movies</p>
							</div>
						</div>
						<div className="flex w-1/2 lg:w-auto py-4">
							<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
								<Icon icon={AiOutlineDesktop} className="w-6 h-6" />
							</div>
							<div className="sm:py-2 ml-2 sm:ml-6">
								<span className="sm:text-2xl font-bold font-heading">
									{data?.aggregateShow._count?._all}
								</span>
								<p className="text-xs sm:text-base text-blueGray-400">Shows</p>
							</div>
						</div>
						<div className="flex w-1/2 lg:w-auto py-4">
							<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
								<Icon icon={AiOutlineCustomerService} className="w-6 h-6" />
							</div>
							<div className="sm:py-2 ml-2 sm:ml-6">
								<span className="sm:text-2xl font-bold font-heading">
									{data?.aggregateSong._count?._all}
								</span>
								<p className="text-xs sm:text-base text-blueGray-400">Songs</p>
							</div>
						</div>
						<div className="flex w-1/2 lg:w-auto py-4">
							<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
								<Icon icon={AiOutlineRead} className="w-6 h-6" />
							</div>
							<div className="sm:py-2 ml-2 sm:ml-6">
								<span className="sm:text-2xl font-bold font-heading">
									{data?.aggregateBook._count?._all}
								</span>
								<p className="text-xs sm:text-base text-blueGray-400">Books</p>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
					<div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25" />
					<nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
						<div className="flex items-center mb-8">
							<a className="mr-auto text-3xl font-semibold leading-none" href="#">
								<img className="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto" />
							</a>
							<button className="navbar-close">
								<svg
									className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div>
							<ul>
								<li className="mb-1">
									<a
										className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
										href="#"
									>
										Testimonials
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
										href="#"
									>
										Blog
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
										href="#"
									>
										FAQ
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
										href="#"
									>
										Contact
									</a>
								</li>
							</ul>
							<div className="mt-4 pt-6 border-t border-blueGray-100">
								<Link href="/register">
									<a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded">
										Sign Up
									</a>
								</Link>
								<Link href="/login">
									<a className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded">
										Log In
									</a>
								</Link>
							</div>
						</div>
						<div className="mt-auto">
							<p className="my-4 text-xs text-blueGray-400">
								<span>Get in Touch</span>
								<a className="text-blue-600 hover:text-blue-600 underline" href="#">
									info@example.com
								</a>
							</p>
							<a className="inline-block px-1" href="#">
								<img src="metis-assets/icons/facebook-blue.svg" alt="" />
							</a>
							<a className="inline-block px-1" href="#">
								<img src="metis-assets/icons/twitter-blue.svg" alt="" />
							</a>
							<a className="inline-block px-1" href="#">
								<img src="metis-assets/icons/instagram-blue.svg" alt="" />
							</a>
						</div>
					</nav>
				</div>
			</section>
			<section
				className="py-20 xl:bg-contain bg-top bg-no-repeat"
				style={{backgroundImage: 'url("metis-assets/backgrounds/intersect.svg")'}}
			>
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<img className="mx-auto" src="metis-assets/icons/quote.svg" alt="" />
						<h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">
							Lorem ipsum dolor sit amet consectutar domor
						</h2>
						<p className="text-blueGray-400 leading-loose">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
						</p>
					</div>
					<div className="flex flex-wrap max-w-5xl mx-auto mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6">
							<div className="p-8 bg-white shadow rounded">
								<div className="flex items-center mb-4">
									<img
										className="h-16 w-16 rounded-full object-cover"
										src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
										alt=""
									/>
									<div className="pl-4">
										<p className="text-xl">John Bailey</p>
										<p className="text-blue-600">CEO</p>
									</div>
								</div>
								<p className="leading-loose text-blueGray-400">
									Donec consequat tortor risus, at auctor felis consequat. Donec quis dolor sem. Sed
									sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
								</p>
							</div>
						</div>
						<div className="w-full md:w-1/2 px-3 mb-6">
							<div className="p-8 bg-white shadow rounded">
								<div className="flex items-center mb-4">
									<img
										className="h-16 w-16 rounded-full object-cover"
										src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
										alt=""
									/>
									<div className="pl-4">
										<p className="text-xl">Julie Bailey</p>
										<p className="text-blue-600">Head of Development</p>
									</div>
								</div>
								<p className="leading-loose text-blueGray-400">
									Donec consequat tortor risus, at auctor felis consequat. Donec quis dolor sem. Sed
									sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<h2 className="mb-12 lg:mb-20 text-3xl md:text-4xl font-bold font-heading">Our Blog</h2>
					<div className="flex flex-wrap -mx-4 mb-20">
						<div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
							<span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
								Development
							</span>
							<h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
								Curabitur vestibulum odio maximus.
							</h3>
							<p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
								Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis,
								felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo
								eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.
							</p>
							<a className="text-xs font-semibold text-blue-600" href="#">
								<span>Read More</span>
								<svg
									className="inline-block w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
						<div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
							<img
								className="w-full h-80 object-cover rounded"
								src="https://images.unsplash.com/photo-1603050927325-baf630505e27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-4 mb-20">
						<div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
							<span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
								Startup
							</span>
							<h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
								Curabitur vestibulum odio maximus.
							</h3>
							<p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
								Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis,
								felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo
								eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.
							</p>
							<a className="text-xs font-semibold text-blue-600" href="#">
								<span>Read More</span>
								<svg
									className="inline-block w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
						<div className="w-full lg:w-1/2 px-4 mb-8 order-0">
							<img
								className="w-full h-80 object-cover rounded"
								src="https://images.unsplash.com/photo-1603665270146-bbdf9858ea55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
								alt=""
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-4 mb-20">
						<div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
							<span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
								Startup
							</span>
							<h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
								Curabitur vestibulum odio maximus.
							</h3>
							<p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
								Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis,
								felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo
								eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.
							</p>
							<a className="text-xs font-semibold text-blue-600" href="#">
								<span>Read More</span>
								<svg
									className="inline-block w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
						<div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
							<img
								className="w-full h-80 object-cover rounded"
								src="https://images.unsplash.com/photo-1603665230556-b5bb38f82591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
								alt=""
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-4 mb-20">
						<div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
							<span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
								Startup
							</span>
							<h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
								Curabitur vestibulum odio maximus.
							</h3>
							<p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
								Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis,
								felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo
								eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.
							</p>
							<a className="text-xs font-semibold text-blue-600" href="#">
								<span>Read More</span>
								<svg
									className="inline-block w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
						<div className="w-full lg:w-1/2 px-4 mb-8 order-0">
							<img
								className="w-full h-80 object-cover rounded"
								src="https://images.unsplash.com/photo-1603665301175-57ba46f392bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
						</div>
					</div>
					<div className="text-center">
						<a
							className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
							href="#"
						>
							Show all posts
						</a>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12">
						<div className="lg:w-1/3 lg:pr-16 mb-2 lg:mb-8">
							<h2 className="text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</h2>
						</div>
					</div>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
							<h4 className="mb-2 md:mb-4 text-xl font-semibold">
								Nunc at arcu non ipsum auctor lacinia quis quis mi?
							</h4>
							<p className="text-sm md:text-base leading-loose text-blueGray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est.
								Duis nec hendrerit magna.
							</p>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
							<h4 className="mb-2 md:mb-4 text-xl font-semibold">
								Nunc at arcu non ipsum auctor lacinia quis quis mi?
							</h4>
							<p className="text-sm md:text-base leading-loose text-blueGray-500">
								Nullam turpis nisi, lobortis sit amet venenatis ac, egestas id quam. Morbi condimentum
								dolor sit amet ornare vestibulum. Maecenas nibh purus, pharetra ac felis sed, elementum
								molestie urna. Nunc at arcu non ipsum auctor lacinia quis quis mi
							</p>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
							<h4 className="mb-2 md:mb-4 text-xl font-semibold">
								Nunc at arcu non ipsum auctor lacinia quis quis mi?
							</h4>
							<p className="text-sm md:text-base leading-loose text-blueGray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est.
								Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.
							</p>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
							<h4 className="mb-2 md:mb-4 text-xl font-semibold">
								Nunc at arcu non ipsum auctor lacinia quis quis mi?
							</h4>
							<p className="text-sm md:text-base leading-loose text-blueGray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est.
								Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.
							</p>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
							<h4 className="mb-2 md:mb-4 text-xl font-semibold">
								Nunc at arcu non ipsum auctor lacinia quis quis mi?
							</h4>
							<p className="text-sm md:text-base leading-loose text-blueGray-500">
								Nullam turpis nisi, lobortis sit amet venenatis ac, egestas id quam. Morbi condimentum
								dolor sit amet ornare vestibulum.
							</p>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
							<h4 className="mb-2 md:mb-4 text-xl font-semibold">
								Nunc at arcu non ipsum auctor lacinia quis quis mi?
							</h4>
							<p className="text-sm md:text-base leading-loose text-blueGray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est.
								Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="max-w-2xl mx-auto text-center">
						<div className="max-w-md mb-8 mx-auto">
							<span className="text-sm text-blueGray-400">Contact Us</span>
							<h2 className="mt-2 text-4xl font-bold font-heading">We will be glad to hear from you!</h2>
						</div>
						<div>
							<form>
								<div className="mb-4 text-sm">
									<span className="mr-4 font-semibold">Departament:</span>
									<label className="mr-4">
										<input
											className="mr-1"
											type="radio"
											name="department"
											defaultValue={1}
											defaultChecked
										/>
										<span>Support</span>
									</label>
									<label>
										<input className="mr-1" type="radio" name="department" defaultValue={2} />
										<span>Request</span>
									</label>
								</div>
								<div className="mb-4">
									<input
										className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
										type="text"
										placeholder="Subject"
									/>
								</div>
								<div className="mb-4">
									<input
										className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
										type="text"
										placeholder="Name"
									/>
								</div>
								<div className="mb-4">
									<input
										className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
										type="email"
										placeholder="name@example.com"
									/>
								</div>
								<div className="mb-4">
									<textarea
										className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
										type="text"
										placeholder="Message..."
										defaultValue={''}
									/>
								</div>
								<div className="mb-4">
									<label className="flex px-2 bg-blueGray-50 rounded">
										<input
											className="hidden"
											type="file"
											placeholder="Choose file.."
											name="Choose file"
										/>
										<div className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
											Browse
										</div>
									</label>
								</div>
								<div className="flex justify-between items-center">
									<label>
										<input className="mr-1" type="checkbox" name="terms" defaultValue={1} />
										<span className="text-sm font-semibold">I agree to terms and conditions.</span>
									</label>
									<button
										className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
										type="submit"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
						<div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
							<a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" href="#">
								swoosh
							</a>
						</div>
						<div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
							<p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.
							</p>
						</div>
						<div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
							<p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
							<p className="lg:text-lg text-blueGray-400">359 Hidden Valley Road, NY</p>
						</div>
						<div className="w-full lg:w-1/5 px-3">
							<p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacts</p>
							<p className="lg:text-lg text-blueGray-400">hello@gmail.com</p>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row items-center lg:justify-between">
						<p className="text-xs text-blueGray-400">© 2020. All rights reserved.</p>
						<div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
							<a className="inline-block px-2" href="#">
								<img src="metis-assets/icons/facebook-blue.svg" alt="" />
							</a>
							<a className="inline-block px-2" href="#">
								<img src="metis-assets/icons/twitter-blue.svg" alt="" />
							</a>
							<a className="inline-block px-2" href="#">
								<img src="metis-assets/icons/instagram-blue.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
