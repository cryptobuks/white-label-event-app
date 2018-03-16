// @flow

export type TFacebookUserInfo = {
  first_name: string,
  id: string,
  picture: {
    data: {
      height: number,
      is_silhouette: boolean,
      url: string,
      width: number,
    },
  },
};

export type TUser = {
  first_name: string,
  id: string,
  picture: string,
};
