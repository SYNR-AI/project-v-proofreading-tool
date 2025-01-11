class AuthModel {
  access_token: string
  refresh_token: string
  user_id: number
  // 是否是正式用户, 匿名登陆不算登陆
  is_login: boolean = false

  constructor(data: any) {
    this.user_id = data.user_id
    this.access_token = data.access_token
    this.refresh_token = data.refresh_token
    this.is_login = data.is_login
  }

  static createFromResponse(responseData: any): AuthModel {
    const data = {
      user_id: responseData.token?.user_id,
      access_token: responseData.token?.access_token,
      refresh_token: responseData.token?.refresh_token,
      is_login: responseData.token?.is_login || false,
    }
    return new AuthModel(data)
  }
}

interface Avatar {
  webp: string
  medium_webp: string
  thumbnail: string
}

class UserInfoModel {
  user_id: number
  name: string
  avatar: Avatar

  constructor(data: any) {
    this.user_id = data.user_id
    this.name = data.name
    this.avatar = data.avatar
  }

  static createFromResponse(responseData: any): UserInfoModel {
    const res = responseData?.user?.user_info
    const data = {
      user_id: res.user_id,
      name: res.name,
      avatar: res.avatar,
    }
    return new UserInfoModel(data)
  }
}

export { AuthModel, UserInfoModel }
