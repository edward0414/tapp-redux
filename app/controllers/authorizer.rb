module Authorizer
  def tapp_admin
    is_admin(ENV['TAPP_ADMINS'])
  end

  def cp_admin
    is_admin(ENV['CP_ADMINS'])
  end

  def correct_applicant
    if ENV['RAILS_ENV'] == 'production'
      if get_utorid != get_applicant(params)
        render status: 403, file: 'public/403.html'
      end
    end
  end

  private
  def is_admin(admins)
    admins = admins.split(',')
    if ENV['RAILS_ENV'] == 'production'
      if !admins.include?(get_utorid)
        render status: 403, file: 'public/403.html'
      end
    end
  end

  def get_applicant(params)
    offer = Offer.find_by(link: params[:mangled])
    if offer
      offer = offer.format
      return offer[:applicant][:utorid]
    else
      render status: 404, file: 'public/404.html'
    end
  end

  def get_utorid
    if request.env['HTTP_X_FORWARDED_USER']
      session[:utorid] = request.env['HTTP_X_FORWARDED_USER']
      set_cookie_keys
      return session[:utorid]
    else
      return session[:utorid]
    end
  end

  def set_cookie_keys
     session[:keys]=[]
     cookies = request.env['HTTP_COOKIE'].split(";")
     cookies.each do |cookie|
       key = cookie.strip.split("=")
       session[:keys].push(key[0])
     end
  end
end
