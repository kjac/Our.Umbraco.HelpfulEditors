using System;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;

namespace Our.Umbraco.HelpfulEditors.ValueConverters;

public abstract class HelpfulPropertySingleSelectValueConverterBase : HelpfulPropertyValueConverterBase
{
	public override Type GetPropertyValueType(IPublishedPropertyType propertyType)
		=> typeof(string);

	public override object ConvertIntermediateToObject(IPublishedElement owner, IPublishedPropertyType propertyType,
		PropertyCacheLevel referenceCacheLevel, object inter, bool preview)
		=> inter?.ToString();
}