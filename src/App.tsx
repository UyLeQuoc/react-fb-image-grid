import './App.css'
import { ReactFbImageGrid } from './components/ReactFbImageGrid'

function App() {

  return (
    <>
      <ReactFbImageGrid 
        images={[
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
          'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/430878538_2206677789683723_4464660377243750146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE_Vr1x6BHZ_S__ovdDg7zS5W9udhABzaHlb252EAHNoS38q_urtNeTErRYpa0zqYNo-vOAf49-zjjLBslYOw-p&_nc_ohc=fFiXMEECmHYQ7kNvgHQcHGs&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=Ad2sBDp1O5zIZAWBoifcpXe&oh=00_AYDUGpnF_BcKHB6Ua92EHau_dnGkdwlpx2zhHRYmvMZKHQ&oe=67148119',
        ]}
        className='w-96 h-96'
      />
    </>
  )
}

export default App
