import { IconType } from 'react-icons';
import { BiMemoryCard, BiGlobe } from 'react-icons/bi';
import { FaTv, FaCamera, FaBatteryFull, FaMemory } from 'react-icons/fa';
import { MdMemory, MdCamera } from 'react-icons/md';

type MainSpecsMapKeysProps = {
  [key: string]: {
    Icon: IconType;
    text: string;
  };
};

export const mainSpecsMapKeys: MainSpecsMapKeysProps = {
  display: { Icon: FaTv, text: 'Tela' },
  processor: { Icon: MdMemory, text: 'Processador' },
  frontCamera: { Icon: MdCamera, text: 'Câmera frontal' },
  rearCamera: { Icon: FaCamera, text: 'Câmera traseira' },
  ram: { Icon: FaMemory, text: 'RAM' },
  storage: { Icon: BiMemoryCard, text: 'Armazenamento' },
  batteryCapacity: { Icon: FaBatteryFull, text: 'Bateria' },
  os: { Icon: BiGlobe, text: 'Sistema operacional' },
};

export const specsTitleMapKeys: { [key: string]: string } = {
  general: 'Geral',
  display: 'Tela',
  hardware: 'Hardware',
  camera: 'Câmera',
  software: 'Software',
  connectivity: 'Conectividade',
  sensors: 'Sensores',
};

export const specsRowMapKeys: { [key: string]: string } = {
  brand: 'Marca',
  model: 'Modelo',
  releaseDate: 'Data de lançamento',
  formFactor: 'Fator de forma',
  dimensionsMm: 'Dimensões',
  batteryCapacityMah: 'Capacidade da bateria',
  colours: 'Cores',
  screenSizeInches: 'Polegadas',
  touchscreen: 'Touchscreen',
  processor: 'Processador',
  processorMake: 'Marca do processador',
  ram: 'RAM',
  internalStorage: 'Armazenamento interno',
  expandableStorage: 'Armazenamento expansível',
  expandableStorageType: 'Tipo de armazenamento expansível',
  expandableStorageUpToGb: 'Armazenamento expansível até (GB)',
  dedicatedMicrosdSlot: 'Slot MicroSD dedicado',
  rearCamera: 'Câmera traseira',
  noOfRearCameras: 'Número de câmeras traseiras',
  rearAutofocus: 'Foco automático (traseiro)',
  frontCamera: 'Câmera frontal',
  noOfFrontCameras: 'Número de câmeras frontais',
  operatingSystem: 'Sistema operacional',
  wifi: 'Wi-FI',
  bluetooth: 'Bluetooth',
  microusb: 'MicroSD',
  numberOfSims: 'Número de SIMS',
  simType: 'Tipo do SIM',
  proximitySensor: 'Sensor de proximidade',
  accelerometer: 'Acelerômetro',
  ambientLightSensor: 'Sensor de luz ambiente',
  sim1: 'SIM 1',
  sim2: 'SIM 2',
  resolution: 'Resolução',
  fingerprintSensor: 'Sensor de impressão digital',
  gyroscope: 'Giroscópio',
  fastCharging: 'Carregamento rápido',
  removableBattery: 'Bateria removível',
  weightG: 'Peso (g)',
  aspectRatio: 'Proporção',
  rearFlash: 'Flash traseiro',
  popupCamera: 'Câmera Pop-up',
  wifiStandardsSupported: 'Padrões de Wi-Fi suportados',
  gps: 'GPS',
  usbTypec: 'USB-C',
  gsmcdma: 'GSM/CDMA',
  wirelessCharging: 'Carregamento sem fio',
  bodyType: 'Tipo do corpo',
  sarValue: 'Taxa de absorção',
  protectionType: 'Tipo de proteção',
  frontAutofocus: 'Autofocus frontal',
  frontFlash: 'Flash frontal',
  nfc: 'NFC',
  infrared: 'Infravermelho',
  usbOtg: 'USB OTG',
  lightning: 'Lightning',
  headphones: 'Fones de ouvido',
  fm: 'FM',
  active4gOnBothSimCards: '4G ativo em ambos os cartões SIM',
  compassMagnetometer: 'Magnetômetro de bússola',
  wifiDirect: 'Wi-Fi Direct',
  mobileHighdefinitionLinkMhl: 'Mobile High Definition Link (MHL)',
  barometer: 'Barômetro',
  temperatureSensor: 'Sensor de temperatura',
  sim3: 'SIM 3',
  '3g': '3G',
  '4gLte': '4G LTE',
  thickness: 'Espessura',
  pixelsPerInchPpi: 'Pontos por polegada',
  skin: 'Película',
  alternateNames: 'Nomes alternativos',
  faceUnlock: 'Desbloqueio facial',
  refreshRate: 'Taxa de atualização',
  ipRating: 'Grau de proteção IP',
  '3dFaceRecognition': 'Reconhecimento facial 3D',
  indisplayFingerprintSensor: 'Sensor de impressão digital na tela',
  resolutionStandard: 'Resolução padrão',
  lensTypeSecondRearCamera: 'Tipo de lente da segunda câmera traseira',
  lensTypeThirdRearCamera: 'Tipo de lente da terceira câmera traseira',
  rearThirdCameraAttr: 'Atributos da terceira câmera traseira',
  height: 'Altura',
  width: 'Largura',
  '5g': '5G',
  brandExclusiveFeatures: 'Recursos exclusivos da marca',
};
