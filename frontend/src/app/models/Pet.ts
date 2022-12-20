export interface Pet {
  id_pet: number,
  pet_name: string,
  pet_description: string,
  pet_photo: string,
  pet_date_register: string,
  pet_lost: number,
  pet_is_register_in_db: number,
  id_color_pelagem_fk: number,
  id_fur_fk: number,
  id_category_fk: number,
  id_race_fk: number,
  id_user_fk: number,
}
