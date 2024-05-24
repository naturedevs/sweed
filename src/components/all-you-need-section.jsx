import Image from 'next/image'

export default function AllYouNeed() {
  return (
    <div className="all-you-need-section lg:py-20 bg-white">
      <div className="container pt-20">
        <div className="pb-[30px] md:pb-[60px]">
          <h2 className="t-heading-1-md text-[#181819]">All You Need <br />In One Place</h2>
        </div>
      </div>
      <div className="container pb-20 lg:px-0">
        <div className="hidden lg:flex blocks-row text-center lg:justify-between lg:pt-20 xl:justify-center scaleup lg:max-w-[1020px] m-auto lg:gap-[10px] flex-wrap">
          <div className='z-[50] hover:z-0 block block-1  w-[33.33%] lg:w-[160px] mb-[30px] lg:mb-[50px] relative' data-connect='block-3, block-7, block-8'>
            <div className='block-inner'>
              <div className='absolute top-[40px] left-[100px] w-[298px] rotate-[0deg] bg-gradient-to-r from-[#5BBA6F] to-[#289590] h-[1px] z-20aa'></div>
              <div className='absolute top-[132px] left-[82px] w-[420px] rotate-[22deg] bg-gradient-to-r from-[#5BBA6F] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute top-[133px] xl:hidden right-[-2px] w-[165px] rotate-[90deg] bg-gradient-to-r from-[#5BBA6F] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute top-[133px] hidden xl:block left-[29px] w-[175px] rotate-[62deg] bg-gradient-to-r from-[#5BBA6F] to-[#06AED5] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_point_of_sale.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Point of Sale</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-2  w-[33.33%] lg:w-[160px] mb-[30px] lg:mb-[50px] relative' data-connect='block-1, block-7, block-8, block-9, block-10'>
            <div className='block-inner'>
              <div className='absolute top-[40px] right-[102px] w-[132px] rotate-[180deg] bg-gradient-to-r from-[#ED254E] to-[#5BBA6F] h-[1px] z-20aa'></div>
              <div className='absolute top-[130px] xl:hidden right-[60px] w-[210px] rotate-[130deg] bg-gradient-to-r from-[#ED254E] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute top-[130px] lg:hidden xl:block right-[20px] w-[210px] rotate-[116deg] bg-gradient-to-r from-[#ED254E] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute top-[130px] left-[70px] w-[270px] rotate-[35deg] bg-gradient-to-r from-[#ED254E] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute top-[131px] xl:hidden left-[10px] w-[190px] rotate-[72deg] bg-gradient-to-r from-[#ED254E] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute top-[131px] lg:hidden xl:block left-[25px] w-[190px] rotate-[62deg] bg-gradient-to-r from-[#ED254E] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute top-[132px] left-[78px] w-[467px] rotate-[22deg] bg-gradient-to-r from-[#ED254E] to-[#5076D8] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_marketing.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Marketing<br />& Loyalty</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-3  w-[33.33%] lg:w-[160px] mb-[30px] lg:mb-[50px] relative' data-connect='block-1, block-9, block-10'>
            <div className='block-inner'>
              <div className='absolute top-[40px] right-[106px] w-[298px] rotate-[180deg] bg-gradient-to-r from-[#289590] to-[#5BBA6F] h-[1px] z-20aa'></div>
              <div className='absolute top-[134px] xl:hidden left-[-80px] w-[180px] rotate-[120deg] bg-gradient-to-r from-[#289590] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute top-[134px] lg:hidden xl:block left-[-60px] w-[180px] rotate-[115deg] bg-gradient-to-r from-[#289590] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute top-[135px] xl:hidden left-[80px] w-[300px] rotate-[33deg] bg-gradient-to-r from-[#289590] to-[#5076D8] h-[1px] z-20aa'></div>
              <div className='absolute top-[135px] lg:hidden xl:block left-[70px] w-[300px] rotate-[35deg] bg-gradient-to-r from-[#289590] to-[#5076D8] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_payments.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Integrated<br />Payments</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-4  w-[33.33%] lg:w-[160px] mb-[30px] lg:mb-[50px] relative' data-connect='block-7, block-8, block-9'>
            <div className='block-inner'>
              <div className='absolute top-[130px] xl:hidden right-[80px] w-[510px] rotate-[160deg] bg-gradient-to-r from-[#A682FF] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute top-[135px] lg:hidden xl:block right-[78px] w-[462px] rotate-[156deg] bg-gradient-to-r from-[#A682FF] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute top-[122px] xl:hidden right-[62px] w-[315px] rotate-[149deg] bg-gradient-to-r from-[#A682FF] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute top-[122px] lg:hidden xl:block right-[48px] w-[315px] rotate-[145deg] bg-gradient-to-r from-[#A682FF] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute top-[120px] right-[30px] w-[190px] rotate-[115deg] bg-gradient-to-r from-[#A682FF] to-[#FFBF00] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_delivery.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Delivery</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-5  w-[33.33%] lg:w-[160px] mb-[30px] lg:mb-[50px] relative' data-connect='block-1, block-6, block-8, block-9, block-10'>
            <div className='block-inner'>
              <div className='absolute top-[40px] right-[102px] w-[650px] rotate-[180deg] bg-gradient-to-r from-[#F67227] to-[#5BBA6F] h-[1px] z-20aa'></div>
              <div className='absolute top-[130px] right-[71px] w-[270px] rotate-[145deg] bg-gradient-to-r from-[#F67227] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute top-[130px] right-[77px] w-[463px] rotate-[159deg] xl:hidden bg-gradient-to-r from-[#F67227] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute top-[135px] right-[77px] w-[453px] rotate-[157deg] lg:hidden xl:block bg-gradient-to-r from-[#F67227] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute top-[128px] right-[28px] w-[155px] rotate-[105deg] xl:hidden bg-gradient-to-r from-[#F67227] to-[#5076D8] h-[1px] z-20aa'></div>
              <div className='absolute top-[128px] right-[38px] w-[155px] rotate-[112deg] lg:hidden xl:block bg-gradient-to-r from-[#F67227] to-[#5076D8] h-[1px] z-20aa'></div>
              <div className='absolute top-[40px] left-[100px] w-[133px] rotate-[0deg] bg-gradient-to-r from-[#F67227] to-[#B84FD7] h-[1px] z-20aa'></div>
              {/* <div className='absolute top-[132px] left-[60px] w-[190px] rotate-[52deg] bg-gradient-to-r from-[#F67227] to-[#D74FA9] h-[1px] z-20aa'></div> */}
              <Image
                src="/images/homepage/icon_inventory.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Inventory<br />Management</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-6  w-[33.33%] lg:w-[160px] mb-[30px] lg:mb-[50px] relative' data-connect='block-5, block-11'>
            <div className='block-inner'>
              <div className='absolute top-[40px] right-[101px] w-[129px] rotate-[180deg] bg-gradient-to-r from-[#B84FD7] to-[#F67227] h-[1px] z-20aa'></div>
              <div className='absolute top-[132px] right-[0px] w-[166px] rotate-[90deg] xl:hidden bg-gradient-to-r from-[#B84FD7] to-[#D74FA9] h-[1px] z-20aa'></div>
              <div className='absolute top-[132px] right-[40px] w-[166px] rotate-[116deg] lg:hidden xl:block bg-gradient-to-r from-[#B84FD7] to-[#D74FA9] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_integrations.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Integrations</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-7  w-[33.33%] lg:w-[160px] custom-w1 mb-[30px] lg:mb-[50px] relative' data-connect='block-2,block-8,block-10, block-4, block-9'>
            <div className='block-inner'>
              <div className='absolute bottom-[88px] left-[310px] w-[180px] rotate-[0deg] xl:hidden bg-gradient-to-r from-[#06AED5] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[260px] w-[180px] rotate-[0deg] lg:hidden xl:block bg-gradient-to-r from-[#06AED5] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[420px] w-[190px] rotate-[180deg] lg:hidden xl:block bg-gradient-to-r from-[#5076D8] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[520px] w-[190px] rotate-[180deg] xl:hidden bg-gradient-to-r from-[#5076D8] to-[#FFBF00] h-[1px] z-20aa'></div>
              
              {/* <div className='absolute bottom-[175px] right-[0px] w-[165px] rotate-[90deg] xl:hidden bg-gradient-to-r from-[#5BBA6F] to-[#06AED5] h-[1px] z-20aa'></div> */}
              {/* <div className='absolute bottom-[180px] right-[36px] w-[175px] rotate-[63deg] lg:hidden xl:block bg-gradient-to-r from-[#5BBA6F] to-[#06AED5] h-[1px] z-20aa'></div> */}
              <div className='absolute bottom-[185px] left-[65px] w-[210px] rotate-[133deg] xl:hidden bg-gradient-to-r from-[#ED254E] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[185px] left-[20px] w-[210px] rotate-[116deg] lg:hidden xl:block bg-gradient-to-r from-[#ED254E] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[185px] left-[85px] w-[520px] rotate-[161deg] xl:hidden bg-gradient-to-r from-[#A682FF] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[180px] left-[65px] w-[460px] rotate-[156deg] lg:hidden xl:block bg-gradient-to-r from-[#A682FF] to-[#06AED5] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[102px] w-[200px] rotate-[0deg] xl:hidden bg-gradient-to-r from-[#5076D8] to-[#5BBA6F] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[102px] w-[160px] rotate-[0deg] lg:hidden xl:block bg-gradient-to-r from-[#5076D8] to-[#5BBA6F] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_customers.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Customers</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-9  w-[33.33%] lg:w-[160px] custom-w1 mb-[30px] lg:mb-[50px] relative' data-connect='block-1,block-2, block-4, block-8, block-7, block-10'>
            <div className='block-inner'>
              <div className='absolute bottom-[88px] left-[300px] w-[190px] xl:hidden rotate-[180deg] bg-gradient-to-r from-[#5076D8] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] right-[94px] w-[190px] xl:hidden rotate-[0deg] bg-gradient-to-r from-[#06AED5] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[101px] w-[200px] xl:hidden rotate-[180deg] bg-gradient-to-r from-[#FFBF00] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[180px] right-[22px] w-[160px] xl:hidden rotate-[75deg] bg-gradient-to-r from-[#ED254E] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[195px] left-[80px] w-[330px] xl:hidden rotate-[148deg] bg-gradient-to-r from-[#A682FF] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[176px] right-[50px] w-[270px] xl:hidden rotate-[40deg] bg-gradient-to-r from-[#5BBA6F] to-[#FFBF00] h-[1px] z-20aa'></div>
              
              <div className='absolute bottom-[88px] left-[250px] w-[190px] rotate-[180deg] lg:hidden xl:block bg-gradient-to-r from-[#5076D8] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] right-[84px] w-[190px] rotate-[0deg] lg:hidden xl:block bg-gradient-to-r from-[#06AED5] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[80px] w-[200px] rotate-[180deg] lg:hidden xl:block bg-gradient-to-r from-[#FFBF00] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[180px] right-[32px] w-[180px] rotate-[65deg] lg:hidden xl:block bg-gradient-to-r from-[#ED254E] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[185px] left-[70px] w-[300px] rotate-[145deg] lg:hidden xl:block bg-gradient-to-r from-[#A682FF] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[176px] right-[50px] w-[295px] rotate-[35deg] lg:hidden xl:block bg-gradient-to-r from-[#5BBA6F] to-[#FFBF00] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_ecommerce.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Ecommerce</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-8  w-[33.33%] lg:w-[160px] custom-w1 mb-[30px] lg:mb-[50px] relative' data-connect='block-1, block-2, block-4,block-7, block-9, block-10'>
            <div className='block-inner'>
              <div className='absolute bottom-[88px] right-[300px] w-[190px] rotate-[0deg] bg-gradient-to-r xl:hidden from-[#06AED5] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] right-[103px] w-[180px] rotate-[0deg] bg-gradient-to-r xl:hidden from-[#06AED5] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[99px] w-[190px] rotate-[180deg] bg-gradient-to-r xl:hidden from-[#5076D8] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[183px] right-[80px] w-[430px] rotate-[21deg] bg-gradient-to-r xl:hidden from-[#5BBA6F] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[190px] right-[70px] w-[300px] rotate-[32deg] bg-gradient-to-r xl:hidden from-[#ED254E] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[190px] left-[45px] w-[175px] rotate-[115deg] bg-gradient-to-r xl:hidden from-[#A682FF] to-[#FFBF00] h-[1px] z-20aa'></div>

              <div className='absolute bottom-[88px] right-[230px] w-[190px] rotate-[0deg] bg-gradient-to-r lg:hidden xl:block from-[#06AED5] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] right-[80px] w-[180px] rotate-[0deg] bg-gradient-to-r lg:hidden xl:block from-[#06AED5] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] left-[80px] w-[190px] rotate-[180deg] bg-gradient-to-r lg:hidden xl:block from-[#5076D8] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[183px] right-[80px] w-[430px] rotate-[21deg] bg-gradient-to-r lg:hidden xl:block from-[#5BBA6F] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[190px] right-[70px] w-[300px] rotate-[32deg] bg-gradient-to-r lg:hidden xl:block from-[#ED254E] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[190px] left-[45px] w-[175px] rotate-[115deg] bg-gradient-to-r lg:hidden xl:block from-[#A682FF] to-[#FFBF00] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_analytics.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Analytics</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-10 w-[33.33%] lg:w-[160px] custom-w1 mb-[30px] lg:mb-[50px] relative' data-connect='block-3, block-5, block-7, block-8'>
            <div className='block-inner'>
              <div className='absolute bottom-[88px] right-[313px] w-[180px] rotate-[0deg] bg-gradient-to-r xl:hidden from-[#06AED5] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] right-[520px] w-[190px] rotate-[0deg] bg-gradient-to-r xl:hidden from-[#06AED5] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] right-[104px] w-[180px] rotate-[0deg] bg-gradient-to-r xl:hidden from-[#FFBF00] to-[#5076D8] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[184px] right-[78px] w-[310px] rotate-[31deg] bg-gradient-to-r xl:hidden from-[#289590] to-[#5076D8] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[180px] left-[25px] w-[155px] rotate-[105deg] bg-gradient-to-r xl:hidden from-[#F67227] to-[#5076D8] h-[1px] z-20aa'></div>
              
              <div className='absolute bottom-[88px] right-[253px] w-[180px] rotate-[0deg] bg-gradient-to-r lg:hidden xl:block from-[#06AED5] to-[#FFBF00] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] right-[420px] w-[190px] rotate-[0deg] bg-gradient-to-r lg:hidden xl:block from-[#06AED5] to-[#43C798] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[88px] right-[104px] w-[180px] rotate-[0deg] bg-gradient-to-r lg:hidden xl:block from-[#FFBF00] to-[#5076D8] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[184px] right-[58px] w-[310px] rotate-[33deg] bg-gradient-to-r lg:hidden xl:block from-[#289590] to-[#5076D8] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[180px] left-[40px] w-[165px] rotate-[115deg] bg-gradient-to-r lg:hidden xl:block from-[#F67227] to-[#5076D8] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_in_store.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>In-Store Screens</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-11 w-[33.33%] lg:w-[160px] custom-w1 mb-[30px] lg:mb-[50px] relative' data-connect='block-6'>
            <div className='block-inner'>
              <div className='absolute bottom-[175px] left-[0px] w-[166px] rotate-[90deg] bg-gradient-to-r xl:hidden from-[#B84FD7] to-[#D74FA9] h-[1px] z-20aa'></div>
              <div className='absolute bottom-[180px] left-[30px] w-[176px] rotate-[115deg] bg-gradient-to-r lg:hidden xl:block from-[#B84FD7] to-[#D74FA9] h-[1px] z-20aa'></div>
              <Image
                src="/images/homepage/icon_distribution.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Distribution<br />& Logistics</span>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden blocks-row text-center justify-start max-w-[1140px] m-auto xl:gap-[10px] flex-wrap">
          <div className='block block-1 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-3, block-7, block-8'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_point_of_sale.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Point of Sale</span>
            </div>
          </div>
          <div className='block block-2 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-7, block-8, block-9, block-10'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_marketing.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Marketing<br />& Loyalty</span>
            </div>
          </div>
          <div className='block block-3 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-9, block-10'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_payments.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Integrated<br />Payments</span>
            </div>
          </div>
          <div className='block block-4 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-7, block-8, block-9'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_delivery.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Delivery</span>
            </div>
          </div>
          <div className='block block-5 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-6, block-8, block-9, block-10'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_inventory.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Inventory<br />Management</span>
            </div>
          </div>
          <div className='block block-6 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-5, block-11'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_integrations.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Integrations</span>
            </div>
          </div>
          <div className='block block-7 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-2, block-4, block-10'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_customers.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Customers</span>
            </div>
          </div>
          <div className='block block-9 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-2, block-4, block-5, block-7, block-10'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_ecommerce.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Ecommerce</span>
            </div>
          </div>
          <div className='block block-8 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-2, block-4, block-7, block-10'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_analytics.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Analytics</span>
            </div>
          </div>
          <div className='block block-10 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-3, block-5, block-7, block-9'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_in_store.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>In-Store Screens</span>
            </div>
          </div>
          <div className='block block-11 w-[33.33%] md:w-[25%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-6'>
            <div className='block-inner'>
              <Image
                src="/images/homepage/icon_distribution.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Distribution<br />& Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}