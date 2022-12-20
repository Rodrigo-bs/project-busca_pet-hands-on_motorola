import { TypeAd } from './TypeAd';
import { Pet } from "./Pet";

export interface Ad {
  id_ad: number,
  ad_title: string,
  ad_description: string,
  ad_photos: string,
  ad_address: string,
  ad_latitude: number,
  ad_longitude: number,
  ad_recompense: string,
  id_type_ad_fk: string,
  id_pet_fk: number,
  id_user_fk: number,
  ad_is_register_in_db: number,
}
