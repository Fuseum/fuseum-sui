import React, { useEffect, useRef } from 'react'
import arrow from '@assets/images/Amazon/arrow.svg'
import { motion } from 'framer-motion'
//Img
import Amazon from '@assets/images/Amazon/amazon.png'
import Check from '@assets/images/Amazon/check.svg'
import Loader from '@src/screen/AmazonScreen/Loader'
import AmzCard from '@assets/images/Amazon/amzCard.png'
import LazCard from '@assets/images/Amazon/lazada.png'
import { LocalStorage } from '@src/utils/localStorage'
import QRCode from 'react-qr-code'
import TestQR from '@assets/images/Amazon/testQR.jpg'

export default function AmazonCardStep({
  step,
  title,
  stepLoading,
  currentref,
  senderOrigin,
}: any) {
  useEffect(() => {}, [])
  return (
    <div className="flex justify-start items-center gap-[8px] h-full w-full">
      {/* Step Column */}
      <div className="relative flex flex-col items-start self-stretch justify-start">
        <div
          // style={{ border: '1px solid rgba(124, 93, 248, 0.25)' }}
          className=" w-[32px] h-[32px] p-[4px] flex items-center gap-[10px] justify-center rounded-full bg-[#FFFFFF] text-[14px] font-[500] leading-7 text-[#140E24] font-DmMono"
        >
          {'0' + step}
        </div>
        <div className="w-[3px] h-full self-center absolute top-[32px] gradient-stepper">
          <p className="opacity-0 ">|</p>
        </div>
      </div>
      {/* Section Content Step 1*/}
      {step == 1 && (
        <div className="flex flex-col items-start gap-4  px-4 py-3 rounded-xl bg-[#151D2ABF] bg-opacity-75 w-full">
          {/* Header */}
          <div className="flex justify-between items-center self-stretch cursor-pointer">
            <span className="text-[#FFF] text-[14px] font-[700] leading-[14px]">{title}</span>
            <img src={arrow} alt="" className=" size-[20px]" />
          </div>

          <div className="flex justify-center items-center rounded-[16px] bg-[linear-gradient(131.27deg,rgba(83,83,83,0.15)_0%,rgba(160,167,176,0.15)_100.75%)] h-[200px] w-[212px]">
            <div
              ref={currentref}
              className="rounded-[12px] w-[180px] h-[180px] bg-[#140E24] flex items-center justify-center"
            >
              {/* <QRCode
                value="0x5748eed6b00696a78fc3263da733a56ad5a2df0480b2abeee60c0cb08b888bea"
                size={171}
              /> */}
              <img src={TestQR} width={171} height={171} alt="test qr" />
            </div>
          </div>
          {/* {stepLoading[0] ? (
            <div className="text-[11.5px] font-[400px] text-[#CECBCF]">
              Scan the QR with a Sui compatible mobile crypto wallet.
            </div>
          ) : (
            <div className="mt-2 text-xs text-green-600">Order value in SUI deposited!</div>
          )} */}
        </div>
      )}
      {/* Section Content Step 2*/}
      {step == 2 && (
        <div className="flex flex-col items-start gap-4 self-stretch px-4 py-3 rounded-xl bg-[#151D2ABF] bg-opacity-75 w-full">
          {/* Header */}
          <div className="flex justify-between items-center self-stretch cursor-pointer">
            <span className="text-[#FFF] text-[14px] font-[700] leading-[14px]">{title}</span>
            <img src={arrow} alt="" className=" size-[20px]" />
          </div>

          <div className="flex flex-col items-center justify-start gap-4 rounded-[16px] h-fit w-full">
            {/* Amazon Card  */}
            <div className="flex h-[120px] flex-col justify-between items-start p-3 rounded-md bg-white w-[212px] relative">
              <img src={AmzCard} alt="" className="absolute inset-0 w-[212px]" />
              <div
                className={`absolute inset-0 flex flex-col w-[212px] items-start justify-between p-3 ${
                  stepLoading[1] ? 'opacity-20' : ''
                }`}
              >
                <img
                  src={senderOrigin === 'Amazon' ? Amazon : LazCard}
                  alt="amazon logo"
                  width={100}
                  className={`${stepLoading[1] ? 'opacity-100' : ''}`}
                />
                <div className="flex flex-col gap-[4px] items-start">
                  <div
                    className={`text-[#F90] text-[14px] font-[700] leading-[100%] ${
                      stepLoading[1] ? 'opacity-100' : ''
                    }`}
                  >
                    {senderOrigin} Gift Card
                  </div>
                  <div
                    className={`text-[#140E24] font-[500] leading-[100%] text-[12px] ${
                      stepLoading[1] ? 'opacity-100' : ''
                    } `}
                  >
                    $16.5
                  </div>
                </div>
              </div>
              {stepLoading[1] ? (
                <div
                  role="status"
                  className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <></>
              )}
            </div>

            {/* Order Total */}
            {/* <div
              style={{
                background: 'linear-gradient(180deg, #0D1A2D 0%, #0C2527 100%)',
                border: '1px solid rgba(103, 174, 214, 0.50)',
              }}
              className="flex justify-between items-start self-stretch px-2 py-2.5 rounded-lg"
            >
              <div className="flex items-center gap-[10px] self-stretch">
                <div className="w-[1px] h-[16px] bg-[#3FFEA2]"></div>
                <div className="font-[500] leading-[100%] text-[12px] uppercase font-DmMono">
                  Order Total
                </div>
              </div>
              <div className="font-[300] text-[30px] leading-[100%] text-[#52FF97] uppercase">
                $16.5
              </div>
            </div> */}
            <div className="w-[212px] bg-[#060D18] rounded-lg px-4 py-3 relative">
              <div className="font-medium text-[10px] leading-[10px] text-white relative z-10">
                ORDER TOTAL
              </div>
              <div className="font-normal text-[32px] leading-[32px] text-[#67B6FF] relative z-10">
                {' '}
                $ 16.5
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="212"
                height="71"
                viewBox="0 0 212 71"
                fill="none"
                className="absolute z-5 bottom-0"
              >
                <g filter="url(#filter0_f_794_4301)">
                  <ellipse cx="102.941" cy="71" rx="69.9406" ry="20.8722" fill="#507598" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_794_4301"
                    x="-67"
                    y="-49.8722"
                    width="339.881"
                    height="241.744"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_794_4301" />
                  </filter>
                </defs>
              </svg>
            </div>
            {stepLoading[1] ? (
              <div className="text-xs text-[#CECBCF] font-[400] leading-[120%]">
                An {senderOrigin} gift card with the value equivalent to the amount of SUI you just
                deposited is being registered.
              </div>
            ) : (
              <div className="mt-2 text-xs text-[#CECBCF]">
                Equivalent {senderOrigin} gift card registered!
              </div>
            )}
          </div>
        </div>
      )}
      {/* Section Content Step 3*/}
      {step == 3 && (
        <div className="flex flex-col items-start gap-4 self-stretch px-4 py-3 rounded-xl bg-[#151D2ABF] bg-opacity-75 w-full">
          {/* Header */}
          <div className="flex justify-between items-center self-stretch cursor-pointer">
            <span className="text-[#FFF] text-[14px] font-[700] leading-[14px]">{title}</span>
            <img src={arrow} alt="" className=" size-[20px]" />
          </div>

          <div className="flex flex-col items-center justify-start gap-4 rounded-[16px] h-fit w-full">
            <div className="flex items-center gap-[10px] self-stretch pl-4 pr-2 py-2 rounded-[32px] bg-[#78787840] bg-opacity-75 border-[0.5px] border-[#97979740]">
              <p className="flex-[1_0_0] text-[#CECBCF] text-[10px] font-[400] leading-[100%] uppercase font-DmMono">
                G6HA-IJ5K-LYUV-WZ14-DQ0R
              </p>
              {stepLoading[2] ? (
                <Loader size={6} />
              ) : (
                <img
                  src={Check}
                  alt="check icon"
                  width={24}
                  className="bg-[#67B6FF] rounded-full"
                />
              )}
            </div>
            {stepLoading[2] ? (
              <div className="text-xs text-[#CECBCF]">
                Applying the newly registered {senderOrigin} gift card balance to order's payment
                method.
              </div>
            ) : (
              <div className="text-[10px] leading-[12px] text-[#CECBCF]">
                Gift card balance applied for payment!
              </div>
            )}
          </div>
        </div>
      )}
      {/* Section Content Step 4*/}
      {step == 4 && (
        <div className="flex flex-col items-start gap-4 self-stretch px-4 py-3 rounded-xl bg-[#151D2ABF] bg-opacity-75 w-full">
          {/* Header */}
          <div className="flex justify-between items-center self-stretch cursor-pointer w-full">
            <span className="text-[#FFF] text-[14px] font-[700] leading-[14px] self-stretch">
              {title}
            </span>
            <img src={arrow} alt="" className=" size-[20px]" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 rounded-[16px] h-fit w-[228px]">
            <div
              style={{ border: '1px solid #4C4562' }}
              className="flex items-center justify-between gap-2.5 self-stretch pl-3 pr-1.5 py-1.5 rounded-lg bg-[#2D273E]"
            >
              <p className="text-xs text-[#CECBCF] font-[400]">
                {stepLoading[3]
                  ? 'Your order is being placed!'
                  : 'Your order has been placed successfully!'}
              </p>

              {stepLoading[3] ? (
                <Loader size={6} />
              ) : (
                <img
                  src={Check}
                  alt="check icon"
                  width={24}
                  className="bg-[#67B6FF] rounded-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
