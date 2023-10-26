// Import the functions we need for SDK
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that being use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  "type": "service_account",
  "project_id": "blog-app-54320",
  "private_key_id": "01a16d6e8fa2973689216a5e6eae610304f293ef",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCt3HHWrxyhpsVt\ng05NbbUm1peXsC0n81OUXdH9EEDowxlWODA9j28TQ9O+cfJFwKz7Zn6eJqQ2o571\ndgUXi7EyQMpa0A/T5gACiJ9qTw5TqZEespxjUiHc4xY8l+0qBFeHRBwLudRKT+1M\np8W8MNRq0bjItBD1A4on97rir07UDbC2jgp720cRM3Obgfvdbrj8kiKU4jl2/c+E\niXQEIisTsbLTbLk29IVzqG0DOxYujSe8wAmnyL4sOBdaesuEc0Jr47n4/MEzZmZO\n5jM1okSTKbkSgG6cya481AOBoIssqAlJ6YdMQy5L6+9MxPgMaaSfjNjQObnO76qq\nY2/fztUDAgMBAAECggEACng0aLupyzg6OlKGZBY/quOQRGOpDHdUKKKPsyAH8JxT\nCcSfbw2UoEHc3eKJttaX9BmjdU2ZZOrsdxaQzu6sEH0jUl2mHloC1SQ6CVJSaApV\ngVY7IaYAAQexvptdfkK9rJkW4UPi+0id3xhZSXBdUkNnz7o8LSz15FtAJ0dsRUum\nKhuvG+F6FGXuDdVehP/eYqLYZfAOZFNbA18xbDHaTPJ6gnkxxzVIbsijEGaRoX3q\nGBXHA9mo1eGMFo1nbYFSbafBPze1LnFVkSTv7Ceajrgi3i/1lTlc7cmtc8d8DOKP\n9NORq4XcEaU5nae5N6tBZdhFFPWdoLkYqND5/qAk6QKBgQDtsVLU48w7BkqUG7yA\nP7m8OYEB90qRjA0+g5z0LxDgiNCvR49BpbHTNm3rqW3y4rZ5bH5iYWLXFgSAit26\nY7FVsTqICp2Zm598hniTuk/p7frO5kzTkKYsS1HR7Eart1us+zdO9UbGsufaowDM\ni8N8uvpJiYOGfSQo/qL6qmE6ywKBgQC7QIe05Hedvkzm6MwLRhxL5m/t3urDK3eI\nr5EEVOdaxbproSkvBPKsRFwE7qnx9eLWiA0KD2EGi31gxRK0ofUkWsZTsk6nA/mj\nmPovzmIJzJw2A6uodo65TFD53WxObDWigFnF+OTBJamKgL95rMsPqIbSydx3eS/+\ne1oLTkNvqQKBgHAkYTgf4ZNXfIg0LdM0PaUYXE1ZJs1UjksYPUzXh9bntc18rZID\nYsqLu4CcB0u4uu6+yUIRQFjKAoXC/qmZr2kGnN7iY0i9q5lMuEa6eEmeBd7nuQd4\nD26GeqvYFd+eOpp6S7Xs8t98OPdmQFJA/pIyhTN8tZkWIaFVwf8Rs53RAoGAC1oF\nIBU9nyV7OgBg5koQyxUkMfJynvRSocmq6+1NvTYBcCbr/Tq6j3DxdycUzGNQphrH\nV5XJFwF7z1MDKEotN0/9d/N2Sy+1gZJzkFRdoyRxT+D3FhZh3p/exNcEitiKg9hu\nGM9W5tKmrYvSj8jG4qMf0UWFhQSmwTGvKsJK2kkCgYEA7Eij8QcbRLsFbtNjT2j8\npEXs6d83Z3HsTQxwzf7QeB5trWZNCHoirRiYoAEe034V6StR5EXIDw3Bdasdnzm0\nAu54/hoz1q/y1NhoL25OKugQf9M9wQPDNqlxRh52pbivR1e+M6kCPf+FJ1JOJXKV\nllKLVjG3QT+1SqJmVs0UWxE=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-v566j@blog-app-54320.iam.gserviceaccount.com",
  "client_id": "110086579152789463044",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-v566j%40blog-app-54320.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);