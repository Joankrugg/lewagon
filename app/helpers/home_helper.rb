module HomeHelper
  def wufoo_form(form_id, height)
    url = "https://lewagon.wufoo.com/embed/#{form_id}/"
    content_tag :iframe, scrolling: "no", height: height,
                 style: "width:100%;border:none", src: url do
      link_to url, "Remplissez le formulaire de candidature"
    end
  end
end
