# Helpful Umbraco Editors

This repo contains a set of property editors for [Umbraco CMS](https://github.com/umbraco/umbraco-cms) - some created as a replacement for the similar buit-in property editors, some to complement the built-in ones.

## Installation

Install the [NuGet package](https://www.nuget.org/packages/Our.Umbraco.HelpfulEditors/) in your Umbraco project:

```
dotnet add MyProject package Our.Umbraco.HelpfulEditors
```

## List of helpful property editors

The package contains fhe following property editors:

### Helpful checkbox list

This property editor is meant as a replacement for the built-in checkbox list. The main goal of this property editor is to separate the checkbox labels and values, allowing you to create meaningful checkbox labels for your content editors (and change them over time) while retaining a separate set of checkbox values for your code to handle.

As an added benefit you can supply optional help texts for each checkbox, further aiding your content editors in their choice.

![Helpful checkbox list](/docs/img/helpful-checkbox-list.png)

### Helpful radio button list

This is entirely the same as the checkbox list - only as radio buttons.

![Helpful radio button list](/docs/img/helpful-radio-button-list.png)

### Helpful toggle list

A property editor that is missing among the built-in property editors. As with the checkbox and radio button lists you can separate the toggle labels and values, and add help texts for each option.

![Helpful toggle list](/docs/img/helpful-toggle-list.png)

### Helpful icon list

A more graphical approach to picking options. This property editor works in much the same way as the property editors above, again allowing you to separate the option labels and values.

![Helpful icon list](/docs/img/helpful-icon-list.png)

This property editor can be configured for single or multi select.

### Helpful expainer

Technically this is also a property editor, albeit not one that accepts any editorial input. It is meant as a means for you to inject helpful guidance in between properties on a document type.

![Helpful icon list](/docs/img/helpful-explainer.png)

_Note: Since this is technically a property on the document type, your content will contain empty properties with the names of your explainers. This is nothing to be alarmed about._

### Custom icons

Did you know that you can add your own SVG icons to the Umbraco backoffice? Here's how:

1. Create a folder under `App_Plugins`. You can name it whatever you want - let's assume it's named _CustomIcons_.
2. Create a folder named _Backoffice_ inside the _CustomIcons_ folder.
3. Create a folder named _Icons_ inside the _Backoffice_ folder.
4. Copy your SVG icons to the _Icons_ folder.
5. Restart your site. Your icons will now appear in the Umbraco backoffice icon picker.

![Custom icons](/docs/img/custom-icons.png)
