import axios, { AxiosInstance } from "axios";
import { IAssetData, IGasPrices, IParsedTx } from "./types";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000, // 30 secs
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export async function apiGetUSDValueFromCoinbase(): Promise<number> {
  const response = await api.get('getCrypoPriceFromCoinbase');
  console.log(response.data);
  const  result  = response.data;
  console.log(result);
  return result;
}

export async function apiGetAccountAssets(address: string, chainId: number): Promise<IAssetData[]> {
  const response = await api.get(`/account-assets/${address}`);
  console.log(response.data);
  const  result  = response.data;
  console.log(result);
  return result;
}

export async function apiGetAccountTransactions(
  address: string,
  chainId: number,
): Promise<IParsedTx[]> {
  const response = await api.get(`/account-transactions?address=${address}&chainId=${chainId}`);
  const result  = response.data;
  return result;
}

export const apiGetCasinoWallet = async (): Promise<string> => {
  const response = await api.get('/getaccount-casino');
  const  result  = response.data;
  return result;
};

export const apiGetContractData= async (contractAddress:string,amount:number): Promise<string> => {
  const response = await api.get(`/getContractData/${contractAddress}/${amount}`);
  const result  = response.data;
  return result;
};


export const apiGetAccountNonce = async (address: string, chainId: number): Promise<string> => {
  const response = await api.get(`/account-nonce/${address}`);
  const result  = response.data;
  return result;
};

export const apiGetGasPrices = async (): Promise<IGasPrices> => {
  const response = await api.get(`/gas-prices`);
  const { result } = response.data;
  return result;
};
