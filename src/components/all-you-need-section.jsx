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
        <div className="hidden lg:flex blocks-row text-center lg:justify-between lg:pt-10 xl:justify-center scaleup lg:max-w-[1020px] m-auto lg:gap-[10px] flex-wrap">
          <div className='z-[50] hover:z-0 block block-1  w-[33.33%] lg:w-[160px] mb-[30px] lg:mb-[50px] relative' data-connect='block-3, block-7, block-8'>
            <div className='block-inner '>
              <div className='absolute top-[40px] left-[90px] w-[329px] rotate-[0deg]  h-[1px] z-20aa'>
                <div className='w-full bg-gradient-to-r from-[#5BBA6F] to-[#289590]'></div>
              </div>
              <div className='absolute top-[128px] xl:hidden  left-[60px] w-[450px] rotate-[23deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#5BBA6F] to-[#FFBF00]'></div>
              </div>
              {/* <div className='absolute top-[132px] xl:hidden  left-[84px] w-[420px] rotate-[21deg] bg-gradient-to-r from-[#5BBA6F] to-[#FFBF00] h-[1px] z-20aa'></div> */}
              <div className='absolute top-[132px] hidden xl:block left-[79px] w-[472px] rotate-[24deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#5BBA6F] to-[#FFBF00]'></div>
              </div>
              <div className='absolute top-[133px] xl:hidden right-[-2px] w-[171px] rotate-[90deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#5BBA6F] to-[#06AED5]'></div>
              </div>
              <div className='absolute top-[133px] hidden xl:block left-[29px] w-[210px] rotate-[66deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#5BBA6F] to-[#06AED5]'></div>
              </div>
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
              <div className='absolute top-[40px] xl:hidden right-[100px] w-[160px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#5BBA6F]'></div>
              </div>
              <div className='absolute top-[130px] xl:hidden right-[57px] w-[266px] rotate-[132deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#06AED5]'></div>
              </div>
              <div className='absolute top-[130px] xl:hidden left-[66px] w-[340px] rotate-[36deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#FFBF00]'></div>
              </div>
              <div className='absolute top-[131px] xl:hidden left-[5px] w-[190px] rotate-[77deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#43C798]'></div>
              </div>
              <div className='absolute top-[132px] xl:hidden left-[78px] w-[524px] rotate-[22deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#5076D8]'></div>
              </div>
              <div className='absolute top-[130px] lg:hidden xl:block right-[14px] w-[210px] rotate-[114deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#06AED5]'></div>
              </div>
              <div className='absolute top-[130px] lg:hidden xl:block left-[69px] w-[300px] rotate-[36deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#FFBF00]'></div>
              </div>
              <div className='absolute top-[40px] lg:hidden xl:block right-[100px] w-[160px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#5BBA6F]'></div>
              </div>
              <div className='absolute top-[131px] lg:hidden xl:block left-[26px] w-[195px] rotate-[65deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#43C798]'></div>
              </div>
              <div className='absolute top-[132px] lg:hidden xl:block left-[78px] w-[480px] rotate-[23deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#ED254E] to-[#5076D8]'></div>
              </div>
         
              <Image
                src="/images/homepage/icon_marketing.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819] z-[999]'>Marketing<br />& Loyalty</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-3  w-[33.33%] lg:w-[160px] mb-[30px] lg:mb-[50px] relative' data-connect='block-1, block-9, block-10'>
            <div className='block-inner'>
              <div className='absolute top-[40px] xl:hidden right-[100px] w-[330px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#289590] to-[#5BBA6F]'></div>
              </div>
              <div className='absolute top-[134px] xl:hidden left-[-80px] w-[230px] rotate-[125deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#289590] to-[#43C798]'></div>
              </div>
              <div className='absolute top-[135px] xl:hidden left-[84px] w-[350px] rotate-[32deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#289590] to-[#5076D8]'></div>
              </div>

              <div className='absolute top-[134px] lg:hidden xl:block left-[-60px] w-[200px] rotate-[115deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#289590] to-[#43C798]'></div>
              </div>
              <div className='absolute top-[135px] lg:hidden xl:block left-[58px] w-[300px] rotate-[36deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#289590] to-[#5076D8]'></div>
              </div>
              <div className='absolute top-[40px] lg:hidden xl:block right-[100px] w-[340px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#289590] to-[#5BBA6F]'></div>
              </div>
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
            <div className='block-inner '>
              <div className='absolute top-[130px] xl:hidden right-[78px] w-[540px] rotate-[160deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#A682FF] to-[#06AED5]'></div>
              </div>
              <div className='absolute top-[120px] xl:hidden right-[16px] w-[190px] rotate-[114deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#A682FF] to-[#FFBF00]'></div>
              </div>
              <div className='absolute top-[128px] xl:hidden right-[62px] w-[330px] rotate-[148deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#A682FF] to-[#43C798]'></div>
              </div>

              <div className='absolute top-[135px] lg:hidden xl:block right-[60px] w-[462px] rotate-[156deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#A682FF] to-[#06AED5]'></div>
              </div>
              <div className='absolute top-[132px] lg:hidden xl:block right-[39px] w-[315px] rotate-[144deg] h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#A682FF] to-[#43C798] '></div>
              </div>
              <div className='absolute top-[120px] lg:hidden xl:block right-[16px] w-[190px] rotate-[114deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#A682FF] to-[#FFBF00]'></div>
              </div>
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
              <div className='absolute top-[40px] xl:hidden right-[100px] w-[675px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#5BBA6F]'></div>
              </div>
              <div className='absolute top-[40px] xl:hidden left-[97px] w-[150px] rotate-[0deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#B84FD7]'></div>
              </div>
              <div className='absolute top-[130px] xl:hidden right-[71px] w-[290px] rotate-[144deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#FFBF00]'></div>
              </div>
              <div className='absolute top-[128px] right-[21px] w-[175px] rotate-[103deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#5076D8]'></div>
              </div>
              <div className='absolute top-[130px] right-[77px] w-[480px] rotate-[159deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#43C798]'></div>
              </div>

              <div className='absolute top-[135px] right-[77px] w-[453px] rotate-[157deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#43C798]'></div>
              </div>
              <div className='absolute top-[128px] right-[42px] w-[190px] rotate-[114deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#5076D8]'></div>
              </div>
              <div className='absolute top-[40px] lg:hidden xl:block left-[97px] w-[150px] rotate-[0deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#B84FD7]'></div>
              </div>
              <div className='absolute top-[40px] lg:hidden xl:block right-[100px] w-[670px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#5BBA6F]'></div>
              </div>
              <div className='absolute top-[130px] lg:hidden xl:block right-[71px] w-[300px] rotate-[144deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#F67227] to-[#FFBF00]'></div>
              </div>
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
              <div className='absolute top-[40px] right-[101px] w-[160px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#B84FD7] to-[#F67227]'></div>
              </div>
              <div className='absolute top-[132px] right-[-6px] w-[180px] rotate-[90deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#B84FD7] to-[#D74FA9]'></div>
              </div>
              <div className='absolute top-[132px] right-[42px] w-[190px] rotate-[114deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#B84FD7] to-[#D74FA9]'></div>
              </div>
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
            <div className='block-inner1 '>
              <div className='absolute bottom-[88px] left-[520px] w-[630px] rotate-[180deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5076D8] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[88px] left-[310px] w-[420px] rotate-[180deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#06AED5] to-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[88px] left-[102px] w-[200px] rotate-[180deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#06AED5] to-[#5BBA6F]'></div>
              </div>
              <div className='absolute bottom-[185px] left-[85px] w-[550px] rotate-[160deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#A682FF] from-[#06AED5]'></div>
              </div>
              <div className='absolute bottom-[185px] !left-[1px] w-[240px] rotate-[132deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#ED254E] from-[#06AED5]'></div>
              </div>
              
              <div className='absolute bottom-[88px] left-[480px] w-[520px] rotate-[180deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5076D8] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[88px] left-[310px] w-[350px] rotate-[180deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#06AED5] to-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[88px] left-[102px] w-[180px] rotate-[180deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#06AED5] to-[#5BBA6F]'></div>
              </div>
              <div className='absolute bottom-[185px] left-[20px] w-[210px] rotate-[114deg] lg:hidden xl:block h-[1px] z-20aa'>
                <div className=' bg-gradient-to-r to-[#ED254E] from-[#06AED5]'></div>
              </div>
              <div className='absolute bottom-[180px] left-[65px] w-[460px] rotate-[156deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#A682FF] from-[#06AED5]'></div>
              </div>
              <Image
                src="/images/homepage/icon_customers.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px]  md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Customers</span>
            </div>
          </div>
          <div className='z-[50] hover:z-0 block block-9  w-[33.33%] lg:w-[160px] custom-w1 mb-[30px] lg:mb-[50px] relative' data-connect='block-1,block-2, block-4, block-8, block-7, block-10'>
            <div className='block-inner1'>
              <div className='absolute bottom-[88px] right-[94px] w-[200px] xl:hidden   h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#06AED5] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[88px] left-[300px] w-[420px] xl:hidden rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5076D8] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[88px] left-[101px] w-[210px] xl:hidden rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#FFBF00] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[180px] right-[22px] w-[180px] xl:hidden rotate-[77deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#ED254E] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[191px] left-[80px] w-[350px] xl:hidden rotate-[148deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#A682FF] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[176px] right-[50px] w-[270px] xl:hidden rotate-[40deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5BBA6F] from-[#43C798]'></div>
              </div>
              
              <div className='absolute bottom-[88px] left-[250px] w-[360px] rotate-[180deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5076D8] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[88px] right-[84px] w-[170px] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#06AED5] to-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[88px] left-[80px] w-[180px] rotate-[180deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#FFBF00] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[180px] right-[32px] w-[190px] rotate-[65deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#ED254E] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[185px] left-[70px] w-[310px] rotate-[144deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#A682FF] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[176px] right-[50px] w-[299px] rotate-[35deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5BBA6F] from-[#43C798]'></div>
              </div>
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
            <div className='block-inner1'>
              <div className='absolute bottom-[88px]   xl:hidden right-[300px] w-[420px] h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#06AED5] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[88px]   xl:hidden right-[103px] w-[180px] h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#FFBF00] to-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[88px]   xl:hidden left-[99px] w-[190px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5076D8] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[183px]  xl:hidden  right-[80px] w-[480px] rotate-[23deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5BBA6F] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[190px]  xl:hidden  right-[70px] w-[300px] rotate-[36deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#ED254E] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[190px]  xl:hidden  left-[45px] w-[195px] rotate-[114deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#A682FF] from-[#FFBF00]'></div>
              </div>

              <div className='absolute bottom-[88px]   lg:hidden xl:block right-[300px] w-[340px] h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#06AED5] from-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[88px]   lg:hidden xl:block right-[103px] w-[180px] h-[1px] z-20aa'>
                <div className='bg-gradient-to-r from-[#FFBF00] to-[#43C798]'></div>
              </div>
              <div className='absolute bottom-[88px]   lg:hidden xl:block left-[99px] w-[190px] rotate-[180deg]  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#5076D8] from-[#FFBF00]'></div>
              </div>

              <div className='absolute bottom-[183px] right-[80px] w-[450px] rotate-[24deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#5BBA6F] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[190px] right-[58px] w-[305px] rotate-[36deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#ED254E] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[190px] left-[45px] w-[195px] rotate-[114deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#A682FF] from-[#FFBF00]'></div>
              </div>
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
            <div className='block-inner1'>
              <div className='absolute bottom-[88px] right-[313px] w-[630px] rotate-[0deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#06AED5] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[88px] right-[104px] w-[200px] rotate-[0deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#FFBF00] from-[#5076D8]'></div>
              </div>
              <div className='absolute bottom-[184px] right-[78px] w-[330px] rotate-[32deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#289590] from-[#5076D8]'></div>
              </div>
              <div className='absolute bottom-[180px] left-[25px] w-[170px] rotate-[103deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#F67227] from-[#5076D8]'></div>
              </div>
              
              <div className='absolute bottom-[88px] right-[253px] w-[520px] rotate-[0deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#06AED5] from-[#FFBF00]'></div>
              </div>
              <div className='absolute bottom-[88px] right-[100px] w-[180px] rotate-[0deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#FFBF00] from-[#5076D8]'></div>
              </div>
              <div className='absolute bottom-[184px] right-[58px] w-[310px] rotate-[36deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#289590] from-[#5076D8]'></div>
              </div>
              <div className='absolute bottom-[180px] left-[40px] w-[190px] rotate-[114deg] lg:hidden xl:block  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#F67227] from-[#5076D8]'></div>
              </div>
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
            <div className='block-inner1'>
              <div className='absolute bottom-[175px] left-[0px] w-[176px] rotate-[90deg] xl:hidden  h-[1px] z-20aa'>
                <div className='bg-gradient-to-r  to-[#B84FD7] from-[#D74FA9]'></div>
              </div>
              <div className='absolute bottom-[180px] left-[30px] w-[190px] rotate-[114deg] lg:hidden xl:block h-[1px] z-20aa'>
                <div className='bg-gradient-to-r to-[#B84FD7] from-[#D74FA9]'></div>
              </div>
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
        <div className="flex mx-[-20px] sm:mx-[-30px] md:mx-[-40px] lg:hidden blocks-row text-center justify-evenly max-w-[1140px] m-auto xl:gap-[10px] flex-wrap">
          <div className='block block-1 w-[33.33%] md:w-[25%]  xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-3, block-7, block-8'>
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