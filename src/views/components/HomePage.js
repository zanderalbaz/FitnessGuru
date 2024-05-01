import React from 'react';
import photo from '../../assets/login-hero.png'


function HomePage() {
    return (
        <div>
          {/* Hero Section */}
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                  <br class="hidden lg:inline-block"></br>
                </h1>
                <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
              </div>
            </div>
          </section>

          {/* Statistical Section */}
          <section class="text-gray-600 body-font">
            <div class="container px-5 pb-24 mx-auto">
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M8 17l4 4 4-4m-4-5v9"></path>
                      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                    <p class="leading-relaxed">Downloads</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                    <p class="leading-relaxed">Users</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
                    <p class="leading-relaxed">Files</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                    <p class="leading-relaxed">Places</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section>
              <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                      <div class="w-full mx-auto">
                          <h1>A small headline to switch your visitors into users.</h1>
                          <h2>A small headline to switch your visitors into users.</h2>
                          <p>Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling.</p>
                      </div>
                  </div>
                  <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                      <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="w-10 h-10" viewBox="0 0 24 24">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <circle cx="12" cy="12" r="9"></circle>
                              <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                          </svg>
                      </div>
                      <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                          <h2>Short length headline.</h2>
                          <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                      </div>
                  </div>
                  <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                      <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="w-10 h-10" viewBox="0 0 24 24">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <circle cx="12" cy="12" r="9"></circle>
                              <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                          </svg>
                      </div>
                      <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                          <h2>Short length headline.</h2>
                          <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                      </div>
                  </div>
                  <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                      <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="w-10 h-10" viewBox="0 0 24 24">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <circle cx="12" cy="12" r="9"></circle>
                              <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                              <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                          </svg>
                      </div>
                      <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                          <h2>Short length headline.</h2>
                          <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Image Collage Section */}
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div class="flex w-full mb-20 flex-wrap">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
                <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
              </div>
              <div class="flex flex-wrap md:-m-2 -m-1">
                <div class="flex flex-wrap w-1/2">
                  <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
                  </div>
                  <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
                  </div>
                  <div class="md:p-2 p-1 w-full">
                    <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="md:p-2 p-1 w-full">
                    <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
                  </div>
                  <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
                  </div>
                  <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                <div class="flex mx-auto border-2 border-red-500 rounded overflow-hidden mt-6">
                  <button class="py-1 px-4 bg-red-500 text-white focus:outline-none">Monthly</button>
                  <button class="py-1 px-4 focus:outline-none">Annually</button>
                </div>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                  
                </div>
                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                  <div class="h-full p-6 rounded-lg border-2 border-red-500 flex flex-col relative overflow-hidden">
                    <span class="bg-red-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SILVER</h2>
                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                      <span>$38</span>
                      <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                    </h1>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Vexillologist pitchfork
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Tumeric plaid portland
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Hexagon neutra unicorn
                    </p>
                    <p class="flex items-center text-gray-600 mb-6">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Mixtape chillwave tumeric
                    </p>
                    <button class="flex items-center mt-auto text-white bg-red-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-600 rounded">Button
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                  </div>
                </div>
                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                  <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium">GOLD</h2>
                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                      <span>$56</span>
                      <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                    </h1>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Vexillologist pitchfork
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Tumeric plaid portland
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Hexagon neutra unicorn
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Vexillologist pitchfork
                    </p>
                    <p class="flex items-center text-gray-600 mb-6">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Mixtape chillwave tumeric
                    </p>
                    <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}         
          <section class="dark:bg-gray-900">
              <div class="container max-w-4xl px-6 py-10 mx-auto">
                  <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>

                  <div class="mt-12 space-y-8">
                      <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                          <button class="flex items-center justify-between w-full p-8">
                              <h1 class="font-semibold text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>

                              <span class="text-gray-400 bg-gray-200 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                  </svg>
                              </span>
                          </button>

                          <hr class="border-gray-200 dark:border-gray-700"/>

                          <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                          </p>
                      </div>

                      <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                          <button class="flex items-center justify-between w-full p-8">
                              <h1 class="font-semibold text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance?</h1>

                              <span class="text-white bg-blue-500 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                              </span>
                          </button>
                      </div>

                      <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                          <button class="flex items-center justify-between w-full p-8">
                              <h1 class="font-semibold text-gray-700 dark:text-white">Do i need a referral?</h1>

                              <span class="text-white bg-blue-500 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                              </span>
                          </button>
                      </div>

                      <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                          <button class="flex items-center justify-between w-full p-8">
                              <h1 class="font-semibold text-gray-700 dark:text-white">What are your opening house?</h1>

                              <span class="text-white bg-blue-500 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                              </span>
                          </button>
                      </div>

                      <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                          <button class="flex items-center justify-between w-full p-8">
                              <h1 class="font-semibold text-gray-700 dark:text-white">What can i expect at my first consultation?</h1>

                              <span class="text-white bg-blue-500 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                              </span>
                          </button>
                      </div>
                  </div>
              </div>
          </section>

          {/* Footer */}
          <footer class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-xl">Tailblocks</span>
              </a>
              <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
                <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </footer>
        </div>
    );
}

export default HomePage;
