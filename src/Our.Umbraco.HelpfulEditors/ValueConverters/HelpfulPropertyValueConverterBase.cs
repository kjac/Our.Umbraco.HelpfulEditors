using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;

namespace Our.Umbraco.HelpfulEditors.ValueConverters;

public abstract class HelpfulPropertyValueConverterBase : PropertyValueConverterBase
{
	public override bool IsConverter(IPublishedPropertyType propertyType)
		=> propertyType.EditorAlias == $"Our.Umbraco.HelpfulEditors.{GetType().Name.Replace("ValueConverter", string.Empty)}";

	public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType)
		=> PropertyCacheLevel.Element;
}