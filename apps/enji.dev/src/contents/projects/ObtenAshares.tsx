import clsx from 'clsx';

import { HeartIcon } from '@/components/Icons';
import SectionTitle from '@/components/sections/SectionTitle';

function ObtenAshares() {
  return (
    <header >
      <SectionTitle
        title="¿Quieres ser parte?"
        caption="¡Obtén tus ASHARES!"
        description={
          <>
            <span>
            Rápida reflección de utilidades: La inversión en ASHARES se verá reflejada en utilidades en corto tiempo, 
         gracias a nuestro modelo deflacionario y estrategias de crecimiento. También recibirás tus ganancias 
         tangibles adheridas a tus tokens ASHARES que estarán alojados en ty AGOD Key. Por lo que serás poseedor 
         de una parte del ecosistema, tendrás propiedad e influencia, y participación en el desarrollo continuo. 
         Dale click aquí abajito 👇.
            </span>
            <br />
            <a
              href="/getashares"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'disabled-link mt-2 flex items-center text-red-400 hover:underline'
              )}
            >
              Invierte en ASHARES
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
            <br />
            <div style={{ marginTop: '30px' }}></div>
            <span style={{ fontSize: '30px', fontWeight: 'bold'}}>¿Tienes dudas de cómo adquirir AGOD Key?</span>
            <a
              href="/blog/agodkey"
              rel="noopener noreferrer"
              className={clsx(
                'flex items-center text-red-400 hover:underline'
              )}
            >
              Revisa este blog post
            </a>
          </>
        }
        altdesc=""
      />
    </header>
  );
}

export default ObtenAshares;
