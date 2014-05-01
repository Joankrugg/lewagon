module ApplicationHelper
  def postulate(text, options = {})
    # link_to text, { controller: "registrations", action: "new" }, options
    link_to text, "/postuler", options
  end
end
