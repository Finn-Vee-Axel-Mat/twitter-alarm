import React from "react";

export default function Tweet() {

  return (
    <>
      <div className="px-6">
        <div class="relative py-3 px-4">
          <div class="px-6 py-2 w-full">
            <div class="flex items-center">
              <a class="flex h-12 w-12 mr-4" href="https://twitter.com/naval" target="_blank" rel="noopener noreferrer">
                <img alt="Naval" src="https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg" class="rounded-full" />
              </a>
              <a href="https://twitter.com/naval" class="author" target="_blank" rel="noopener noreferrer" class="flex flex-col ml-2">
                <span class="flex items-center font-bold text-gray-900 leading-5" title="{author.name}">
                  Naval
                  <svg aria-label="Verified Account" class="mx-1 text-blue-500 inline h-4 w-4" viewBox="0 0 24 24">
                    <g fill="currentColor">
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                    </g>
                  </svg>
                  <span class="text-blue-500" title="{`@naval`}"> @naval </span>

                </span>
                <div class="leading-normal whitespace-pre-wrap text-base text-gray-700">Learn to sell. Learn to build. If you can do both, you will be unstoppable.</div>
                <a class="text-gray-500 text-sm hover:underline" href="https://twitter.com/naval/status/1002104154737684480" target="_blank" rel="noopener noreferrer"> 3:27 AM - May 31, 2018 </a>
              </a>
              <a class="ml-auto" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="328 355 335 276" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z" fill="#3BA9EE" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
