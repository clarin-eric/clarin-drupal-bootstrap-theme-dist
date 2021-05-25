/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {
  Drupal.behaviors.clarin = {
    attach: function attach(context) {
      if (context !== document) {
        return;
      }

      // Form field label as placeholder
      $(
        ".mailchimp-signup-subscribe-form .form-type-email, .path-search .search-form .form-type-search"
      ).each(function() {
        const label = $(this)
          .find("label")
          .text();
        $(this)
          .find(".form-control")
          .attr("placeholder", label);
      });

      // Header scroll down arrow function
      $(".paragraph--type--header-large .arrow-down").click(function() {
        $("html, body").animate({ scrollTop: "+=660px" }, 800);
      });

      // Hide tags if there are more than 2
      $(
        ".node--view-mode-teaser-list .field--name-field-tags, .node--view-mode-teaser-big .field--name-field-tags"
      ).each(function() {
        if ($(this).find("li").length > 2) {
          $(this)
            .find("ul")
            .addClass("hide-more");
          $(this)
            .find("ul")
            .append('<li class="show-tags">...</li>');
        }
      });

      // Show tags when clicked on show tags button
      $(".show-tags").click(function() {
        $(this)
          .parent()
          .removeClass("hide-more");
      });
    }
  };
})(jQuery, Drupal);