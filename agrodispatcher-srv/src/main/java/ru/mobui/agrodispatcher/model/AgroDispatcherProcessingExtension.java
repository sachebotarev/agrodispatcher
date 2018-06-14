package ru.mobui.agrodispatcher.model;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.olingo.odata2.api.edm.EdmSimpleTypeKind;
import org.apache.olingo.odata2.api.edm.provider.ComplexType;
import org.apache.olingo.odata2.api.edm.provider.EntityType;
import org.apache.olingo.odata2.api.edm.provider.Property;
import org.apache.olingo.odata2.api.edm.provider.Schema;
import org.apache.olingo.odata2.api.edm.provider.SimpleProperty;
import org.apache.olingo.odata2.jpa.processor.api.model.JPAEdmExtension;
import org.apache.olingo.odata2.jpa.processor.api.model.JPAEdmSchemaView;

public class AgroDispatcherProcessingExtension implements JPAEdmExtension {

	@Override
	public void extendJPAEdmSchema(JPAEdmSchemaView view) {
		Schema edmSchema = view.getEdmSchema();
		List<EntityType> entityTypes = edmSchema.getEntityTypes();
////		for(EntityType entityType: entityTypes) {
////			if("Capacity".equals(entityType.getName())){
////				SimpleProperty property = new SimpleProperty();
////				property.setName("XXX");
////				property.setType(EdmSimpleTypeKind.String);
////				List<Property> properties = entityType.getProperties();
////				properties.add(property);
////				entityType.setProperties(properties);
////			};
////			
////		}
//		
//	      ComplexType complexType = new ComplexType();
//
//	      List<Property> properties = new ArrayList<Property>();
//	      SimpleProperty property = new SimpleProperty();
//
//	      property.setName("Phone");
//	      property.setType(EdmSimpleTypeKind.String);
//	      properties.add(property);
//	      
//	      property = new SimpleProperty();
//	      property.setName("Mobile");
//	      property.setType(EdmSimpleTypeKind.String);
//	      properties.add(property);
//
//	      property = new SimpleProperty();
//	      property.setName("Fax");
//	      property.setType(EdmSimpleTypeKind.String);
//	      properties.add(property);
//
//	      property = new SimpleProperty();
//	      property.setName("Email");
//	      property.setType(EdmSimpleTypeKind.String);
//	      properties.add(property);
//
//	      complexType.setName("Contact");
//	      complexType.setProperties(properties);
//	      
//	      List<ComplexType> complexTypes = edmSchema.getComplexTypes();
//	      if(complexTypes != null) {
//	    	  edmSchema.getComplexTypes().add(complexType);
//	      }else {
//	    	  complexTypes = new ArrayList<ComplexType>();
//	    	  complexTypes.add(complexType);
//	    	  edmSchema.setComplexTypes(complexTypes);
//	      }
	     
		
	}

	@Override
	public void extendWithOperation(JPAEdmSchemaView view) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public InputStream getJPAEdmMappingModelStream() {
		// TODO Auto-generated method stub
		return null;
	}

}
