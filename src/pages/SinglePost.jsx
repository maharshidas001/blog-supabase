import { MaxContainer } from '@/components';
import React from 'react';
import Travel from '@/assets/Travel.png';

const SinglePost = () => {
  return (
    <>
      <main id='single-post'>
        <MaxContainer>
          <div className='flex flex-col items-center'>
            <h1 className='text-5xl font-bold sm:text-center'
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >Best startegy to achieve profitable harvest</h1>
            <div className='w-full sm:w-4/5 md:w-3/5 lg:w-1/2 mt-6'>
              <img src={Travel} alt="Image" className='w-full' />
            </div>
            <div className='inline-grid gap-2 mt-4'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nemo consequatur culpa qui expedita nulla recusandae dolorem officia modi illo. Natus consequatur obcaecati at minus quisquam. Amet aut aspernatur sed.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio officia numquam corrupti, perspiciatis ad eaque obcaecati blanditiis ex harum facere ullam impedit deserunt, in rem ab? Reiciendis tenetur eos repellendus deserunt assumenda magni veniam necessitatibus quod libero? Et molestiae voluptatum ipsum, accusantium pariatur minima adipisci magnam animi recusandae eos officia, inventore vel nobis ducimus sed maiores aperiam nulla deleniti?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in optio debitis maxime commodi et eius mollitia minima ex ad, reprehenderit nesciunt cum praesentium libero fuga quas nostrum natus excepturi rem error totam blanditiis nobis, iste repudiandae? Sint, consectetur ratione minima tenetur soluta perferendis similique earum modi suscipit distinctio blanditiis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae accusantium, doloribus velit reprehenderit ullam labore natus? Voluptatibus iure itaque deserunt voluptas quibusdam enim, dolores optio libero cumque, accusantium rerum.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, temporibus? Sunt tenetur ut cumque nulla omnis, eos provident vitae quod a, quisquam, hic debitis esse voluptates amet aperiam eius iusto minima et id nesciunt. Debitis sit quo, voluptatibus, iusto ipsa odio laudantium totam iure sequi vitae rem libero aliquam? Quasi enim repellendus odio excepturi consequuntur, maxime quos rerum at voluptate quibusdam dolor cum odit facere, commodi similique quod assumenda quas exercitationem molestias possimus sit laboriosam ratione corrupti nulla? Architecto ratione reiciendis cupiditate illo rem dicta suscipit nobis iure, facilis placeat ab nam fugiat, dolores qui at hic maiores minima rerum perspiciatis esse voluptatum dolore quasi est exercitationem. Dicta, repellat? Ad blanditiis voluptatem, delectus illo veniam inventore nobis tempore recusandae sed.
              </p>
            </div>
          </div>
        </MaxContainer>
      </main>
    </>
  )
}

export default SinglePost;